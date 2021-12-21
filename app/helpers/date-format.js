import { helper } from '@ember/component/helper';

export default helper(function dateFormat([date], { locale }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(locale, options);
});
