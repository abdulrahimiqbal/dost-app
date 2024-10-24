import { NavigatedData, Page } from '@nativescript/core';
import { ProfileModel } from './profile-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new ProfileModel();
}