import kg from 'kg';
import i18nconfig from 'app/i18n';
import {Log} from 'app/lib';
import data from 'app/data';
import themeStyle from 'app/style/theme';


const _log = Log.create('app/boot');

kg.init({themeStyle});
_log.sign('kg framework init');

data.init();
_log.sign('data init');