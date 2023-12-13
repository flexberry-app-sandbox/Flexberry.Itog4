import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.itog4.caption'),
          title: i18n.t('forms.application.sitemap.itog4.title'),
          children: [{
            link: 'i-i-s-itog4-услуги-l',
            caption: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-услуги-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-itog4-клиент-l',
            caption: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-клиент-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-itog4-договор-l',
            caption: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-договор-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-itog4-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-дир-отд-по-раб-с-кл-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-itog4-затр-время-l',
            caption: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-затр-время-l.title'),
            children: null
          }, {
            link: 'i-i-s-itog4-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.itog4.i-i-s-itog4-расчет-ост-врем-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})