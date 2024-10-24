import { Observable, Frame } from '@nativescript/core';

export class HelloWorldModel extends Observable {
    private _dosts: Array<any>;

    constructor() {
        super();
        
        this._dosts = [
            { id: 1, name: 'Molvi Saab', avatar: '~/images/molvi.png' },
            { id: 2, name: 'Shaair', avatar: '~/images/shaair.png' },
            { id: 3, name: 'Ustaad', avatar: '~/images/ustaad.png' },
            { id: 4, name: 'Joker', avatar: '~/images/joker.png' },
            { id: 5, name: 'Qissay', avatar: '~/images/qissay.png' },
            { id: 6, name: 'Banker', avatar: '~/images/banker.png' }
        ];
    }

    get dosts(): Array<any> {
        return this._dosts;
    }

    onDostSelect(args: any) {
        const selectedDost = args.object.bindingContext;
        Frame.topmost().navigate({
            moduleName: "pages/chat/chat-page",
            context: selectedDost,
            transition: { name: "slide" }
        });
    }

    onHomeTap() {
        Frame.topmost().navigate({
            moduleName: "main-page",
            clearHistory: true
        });
    }

    onConversationsTap() {
        Frame.topmost().navigate({
            moduleName: "pages/conversations/conversations-page"
        });
    }

    onProfileTap() {
        Frame.topmost().navigate({
            moduleName: "pages/profile/profile-page"
        });
    }
}