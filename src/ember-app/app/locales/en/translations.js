import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItog4ДирОтдПоРабСКлLForm from './forms/i-i-s-itog4-дир-отд-по-раб-с-кл-l';
import IISItog4ДоговорLForm from './forms/i-i-s-itog4-договор-l';
import IISItog4ЗатрВремяLForm from './forms/i-i-s-itog4-затр-время-l';
import IISItog4КлиентLForm from './forms/i-i-s-itog4-клиент-l';
import IISItog4РасчетОстВремLForm from './forms/i-i-s-itog4-расчет-ост-врем-l';
import IISItog4УслугиLForm from './forms/i-i-s-itog4-услуги-l';
import IISItog4ДирОтдПоРабСКлEForm from './forms/i-i-s-itog4-дир-отд-по-раб-с-кл-e';
import IISItog4ДоговорEForm from './forms/i-i-s-itog4-договор-e';
import IISItog4ЗатрВремяEForm from './forms/i-i-s-itog4-затр-время-e';
import IISItog4КлиентEForm from './forms/i-i-s-itog4-клиент-e';
import IISItog4РасчетОстВремEForm from './forms/i-i-s-itog4-расчет-ост-врем-e';
import IISItog4УслугиEForm from './forms/i-i-s-itog4-услуги-e';
import IISItog4ДирОтдПоРабСКлModel from './models/i-i-s-itog4-дир-отд-по-раб-с-кл';
import IISItog4ДоговорModel from './models/i-i-s-itog4-договор';
import IISItog4ЗатрВремяModel from './models/i-i-s-itog4-затр-время';
import IISItog4КлиентModel from './models/i-i-s-itog4-клиент';
import IISItog4ОказУслугModel from './models/i-i-s-itog4-оказ-услуг';
import IISItog4РасчетОстВремModel from './models/i-i-s-itog4-расчет-ост-врем';
import IISItog4УслугиModel from './models/i-i-s-itog4-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog4-дир-отд-по-раб-с-кл': IISItog4ДирОтдПоРабСКлModel,
    'i-i-s-itog4-договор': IISItog4ДоговорModel,
    'i-i-s-itog4-затр-время': IISItog4ЗатрВремяModel,
    'i-i-s-itog4-клиент': IISItog4КлиентModel,
    'i-i-s-itog4-оказ-услуг': IISItog4ОказУслугModel,
    'i-i-s-itog4-расчет-ост-врем': IISItog4РасчетОстВремModel,
    'i-i-s-itog4-услуги': IISItog4УслугиModel
  },

  'application-name': 'Itog4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Itog4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog4',
          title: 'Itog4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        itog4: {
          caption: 'Itog4',
          title: 'Itog4',
          'i-i-s-itog4-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-itog4-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-itog4-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-itog4-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-itog4-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-itog4-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-itog4-дир-отд-по-раб-с-кл-l': IISItog4ДирОтдПоРабСКлLForm,
    'i-i-s-itog4-договор-l': IISItog4ДоговорLForm,
    'i-i-s-itog4-затр-время-l': IISItog4ЗатрВремяLForm,
    'i-i-s-itog4-клиент-l': IISItog4КлиентLForm,
    'i-i-s-itog4-расчет-ост-врем-l': IISItog4РасчетОстВремLForm,
    'i-i-s-itog4-услуги-l': IISItog4УслугиLForm,
    'i-i-s-itog4-дир-отд-по-раб-с-кл-e': IISItog4ДирОтдПоРабСКлEForm,
    'i-i-s-itog4-договор-e': IISItog4ДоговорEForm,
    'i-i-s-itog4-затр-время-e': IISItog4ЗатрВремяEForm,
    'i-i-s-itog4-клиент-e': IISItog4КлиентEForm,
    'i-i-s-itog4-расчет-ост-врем-e': IISItog4РасчетОстВремEForm,
    'i-i-s-itog4-услуги-e': IISItog4УслугиEForm
  },

});

export default translations;
