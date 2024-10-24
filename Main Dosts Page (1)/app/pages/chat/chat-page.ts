import { NavigatedData, Page } from '@nativescript/core';
import { ChatViewModel } from './chat-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const chatVM = new ChatViewModel();
    
    // Get the selected Dost from navigation context
    const selectedDost = page.navigationContext;
    if (selectedDost) {
        chatVM.initWithDost(selectedDost);
    }
    
    page.bindingContext = chatVM;
}