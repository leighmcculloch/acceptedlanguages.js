import * as util from 'acceptedlanguages-util';
import * as user from 'acceptedlanguages-user';
import * as page from 'acceptedlanguages-page';
import * as relevant from 'acceptedlanguages-relevant';

export default {
  lib: {
    util: util,
    user: user,
    page: page,
    relevant: relevant
  },
  current: page.getCurrentLanguage(),
  accepted: user.getAcceptedLanguages(),
  acceptedExpanded: util.expandLanguages(user.getAcceptedLanguages()),
  alternate: page.getAlternateLanguages(),
  alternateExpanded: util.expandLanguages(page.getAlternateLanguages()),
  relevant: relevant.getRelevantAlternateLanguages()
};
