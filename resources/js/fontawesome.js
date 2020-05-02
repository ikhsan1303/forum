import { config, library, dom } from '@fortawesome/fontawesome-svg-core';
config.autoReplaceSvg = 'nest';
import { faCaretUp,
         faCaretDown,
         faCaretLeft,
         faHome,
         faStar,
         faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretUp,
            faCaretDown,
            faCaretLeft,
            faHome,
            faStar,
            faCheck);

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch();