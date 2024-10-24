import { Observable, Frame } from '@nativescript/core';

export class ConversationsModel extends Observable {
    private _conversations: Array<any>;

    constructor() {
        super();
        
        this._conversations = [
            {
                dostName: "Molvi Saab",
                dostAvatarUrl: "~/images/default-avatar.png",
                lastMessage: "Had a great conversation about mindfulness",
                timestamp: new Date()
            },
            {
                dostName: "Shaair",
                dostAvatarUrl: "~/images/default-avatar.png",
                lastMessage: "We discussed meditation techniques",
                timestamp: new Date()
            }
        ];
        
        this.notifyPropertyChange('conversations', this._conversations);
    }

    get conversations(): Array<any> {
        return this._conversations;
    }

    onHomeNav() {
        Frame.topmost().navigate({
            moduleName: "main-page",
            clearHistory: true
        });
    }
}