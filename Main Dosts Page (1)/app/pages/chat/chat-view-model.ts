import { Observable, Frame } from '@nativescript/core';
import { TNSRecorder, TNSPlayer } from '@nativescript/audio';

export class ChatViewModel extends Observable {
    private _currentDost: any;
    private _messages: Array<any>;
    private _messageText: string;
    private _isRecording: boolean;
    private _recorder: TNSRecorder;
    private _player: TNSPlayer;
    private _currentRecording: string;

    constructor() {
        super();

        this._currentDost = null;
        this._messages = [];
        this._messageText = "";
        this._isRecording = false;
        this._recorder = new TNSRecorder();
        this._player = new TNSPlayer();
        this._currentRecording = "";

        this.initializeAudio();
    }

    async initializeAudio() {
        try {
            await this._recorder.requestRecordPermission();
            this._recorder.volume = 1.0;
            this._player.volume = 1.0;
        } catch (err) {
            console.error('Audio initialization error:', err);
        }
    }

    initWithDost(dost: any) {
        this._currentDost = dost;
        this._messages = [
            {
                content: `Hello! I'm ${dost.name}. How can I help you today?`,
                isUser: false,
                timestamp: new Date().toLocaleTimeString(),
                isVoiceNote: false
            }
        ];
        this.notifyPropertyChange('currentDost', this._currentDost);
        this.notifyPropertyChange('messages', this._messages);
    }

    get currentDost(): any {
        return this._currentDost;
    }

    get messages(): Array<any> {
        return this._messages;
    }

    get messageText(): string {
        return this._messageText;
    }

    set messageText(value: string) {
        if (this._messageText !== value) {
            this._messageText = value;
            this.notifyPropertyChange('messageText', value);
        }
    }

    get isRecording(): boolean {
        return this._isRecording;
    }

    async toggleRecording() {
        if (!this._isRecording) {
            try {
                this._isRecording = true;
                this.notifyPropertyChange('isRecording', true);
                
                const audioPath = `${TNSRecorder.CacheFolder}/recording.m4a`;
                await this._recorder.start(audioPath);
            } catch (err) {
                console.error('Recording start error:', err);
            }
        } else {
            try {
                const audioFile = await this._recorder.stop();
                this._isRecording = false;
                this.notifyPropertyChange('isRecording', false);
                
                // Add voice message to chat
                this._messages.push({
                    isVoiceNote: true,
                    audioFile: audioFile,
                    isUser: true,
                    timestamp: new Date().toLocaleTimeString(),
                    playbackProgress: 0,
                    isPlaying: false
                });
                this.notifyPropertyChange('messages', this._messages);
            } catch (err) {
                console.error('Recording stop error:', err);
            }
        }
    }

    async onPlayVoiceNote(args: any) {
        const message = args.object.bindingContext;
        
        if (!message.isPlaying) {
            try {
                await this._player.playFromFile(message.audioFile);
                message.isPlaying = true;
                this.notifyPropertyChange('messages', this._messages);
                
                this._player.on('completed', () => {
                    message.isPlaying = false;
                    message.playbackProgress = 0;
                    this.notifyPropertyChange('messages', this._messages);
                });
            } catch (err) {
                console.error('Playback error:', err);
            }
        } else {
            await this._player.pause();
            message.isPlaying = false;
            this.notifyPropertyChange('messages', this._messages);
        }
    }

    sendMessage() {
        if (this._messageText.trim()) {
            this._messages.push({
                content: this._messageText,
                isUser: true,
                timestamp: new Date().toLocaleTimeString(),
                isVoiceNote: false
            });
            
            // Simulate Dost response
            setTimeout(() => {
                this._messages.push({
                    content: `As ${this._currentDost.name}, I acknowledge your message and I'm here to help.`,
                    isUser: false,
                    timestamp: new Date().toLocaleTimeString(),
                    isVoiceNote: false
                });
                this.notifyPropertyChange('messages', this._messages);
            }, 1000);

            this.messageText = "";
            this.notifyPropertyChange('messages', this._messages);
        }
    }
}