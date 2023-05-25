export function getLanguage(locale: string) {
    switch(locale) {
        case 'en':
            return 'anglais';
        case 'fr':
            return 'français';
        default: 
            return 'anglais';
    }
}