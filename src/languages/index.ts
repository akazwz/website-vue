import { createI18n } from 'vue-i18n'

const messages = {
  zh: require('./zh'),
  en: require('./en')
}

const i18n = createI18n(
  {
    locale: 'zh',
    fallbackLocale: 'zh',
    messages: messages,
    globalInjection: true
  }
)

export default i18n
