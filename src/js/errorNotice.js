import { error } from '@pnotify/core/dist/PNotify';
 
export function errorNotice() {
    
    return error({
        text: 'Requested images not found',
        sticker: false,
        delay: 1000
    });
};