import { Observable, Frame } from '@nativescript/core';

export class ProfileModel extends Observable {
    private _userData: any;

    constructor() {
        super();
        
        this._userData = {
            userName: "John Doe",
            userEmail: "john.doe@example.com",
            profileImage: "~/images/default-avatar.png",
            totalConversations: 15,
            totalDosts: 3
        };
        
        this.notifyPropertyChange('userData', this._userData);
    }

    get userName(): string {
        return this._userData.userName;
    }

    get userEmail(): string {
        return this._userData.userEmail;
    }

    get profileImage(): string {
        return this._userData.profileImage;
    }

    get totalConversations(): number {
        return this._userData.totalConversations;
    }

    get totalDosts(): number {
        return this._userData.totalDosts;
    }

    onEditProfile() {
        console.log("Edit Profile tapped");
    }

    onNotifications() {
        console.log("Notifications tapped");
    }

    onPrivacy() {
        console.log("Privacy tapped");
    }

    onHomeNav() {
        Frame.topmost().navigate({
            moduleName: "main-page",
            clearHistory: true
        });
    }
}