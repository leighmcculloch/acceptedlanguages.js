import * as util from 'acceptedlanguages-util';
import * as user from 'acceptedlanguages-user';
import * as page from 'acceptedlanguages-page';
import * as relevant from 'acceptedlanguages-relevant';

export default {
  accepted: user.getAcceptedLanguages(),
  acceptedExpanded: util.expandLanguages(user.getAcceptedLanguages()),
  alternate: page.getAlternateLanguages(),
  alternateExpanded: util.expandLanguages(page.getAlternateLanguages()),
  relevant: relevant.getRelevantAlternateLanguages()
};
