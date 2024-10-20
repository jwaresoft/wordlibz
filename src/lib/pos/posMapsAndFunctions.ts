type PosMap = { [key: string]: string };

/**
 * NLP engineers love language and hate documentation.  I believe this is the correct POS reference
 *
 * https://cs.nyu.edu/~grishman/jet/guide/PennPOS.html
 */
const POSReference = {
  Coordinating_conjunction: "CC",
  Cardinal_number: "CD",
  Determiner: "DT",
  Existential_there: "EX",
  Foreign_word: "FW",
  Preposition: "IN",
  Adjective: "JJ",
  Adjective_comparative: "JJR",
  Adjective_superlative: "JJS",
  List_item_marker: "LS",
  Modal: "MD",
  Noun_singular_or_mass: "NN",
  Noun_plural: "NNS",
  Proper_noun_singular: "NNP",
  Proper_noun_plural: "NNPS",
  Predeterminer: "PDT",
  Possessive_ending: "POS",
  Personal_pronoun: "PRP",
  Possessive_pronoun: "PRP$",
  Adverb: "RB",
  Adverb_comparative: "RBR",
  Adverb_superlative: "RBS",
  Particle: "RP",
  Symbol: "SYM",
  to: "TO",
  Interjection: "UH",
  Verb_base_form: "VB",
  Verb_past_tense: "VBD",
  Verb_gerund_or_present_participle: "VBG",
  Verb_past_participle: "VBN",
  Verb_non_3rd_person_singular_present: "VBP",
  Verb_3rd_person_singular_present: "VBZ",
  Wh_determiner: "WDT",
  Wh_pronoun: "WP",
  Possessive_wh_pronoun: "WP$",
  Wh_adverb: "WRB",
};

const nounTypes = [
  POSReference.Noun_singular_or_mass,
  POSReference.Noun_plural,
];
const properNounTypes = [
  POSReference.Proper_noun_plural,
  POSReference.Proper_noun_singular,
];
const verbTypes = [
  POSReference.Verb_3rd_person_singular_present,
  POSReference.Verb_base_form,
  POSReference.Verb_gerund_or_present_participle,
  POSReference.Verb_non_3rd_person_singular_present,
  POSReference.Verb_past_participle,
  POSReference.Verb_past_tense,
];
const adjectiveTypes = [
  POSReference.Adjective,
  POSReference.Adjective_comparative,
  POSReference.Adjective_superlative,
];
const adverbTypes = [
  POSReference.Adverb,
  POSReference.Adverb_comparative,
  POSReference.Adverb_superlative,
];

const posFriendlyNames = {
  Adjective: "Adjective",
  Adverb: "Adverb",
  Noun: "Noun",
  Verb: "Verb",
  Proper_Noun: "Proper Noun",
};

/**
 * Creates a map for returning the pos friendly name for various part of speech abbreviations
 *
 * @param posTag
 */
function constructBasicPOSMap() {
  const posMap: PosMap = {};
  // add nouns
  nounTypes.forEach((nounType) => {
    posMap[nounType] = posFriendlyNames.Noun;
  });
  // add proper nouns
  properNounTypes.forEach((propNounType) => {
    posMap[propNounType] = posFriendlyNames.Proper_Noun;
  });
  // add verb types
  verbTypes.forEach((verbType) => {
    posMap[verbType] = posFriendlyNames.Verb;
  });
  // add adjective types
  adjectiveTypes.forEach((adjectiveType) => {
    posMap[adjectiveType] = posFriendlyNames.Adjective;
  });
  // add adverb types
  adverbTypes.forEach((adverbType) => {
    posMap[adverbType] = posFriendlyNames.Adverb;
  });

  return posMap;
}

function isNoun(posTag: string) {
  return nounTypes.indexOf(posTag) > -1;
}

function isProperNoun(posTag: string) {
  return properNounTypes.indexOf(posTag) > -1;
}

function isVerb(posTag: string) {
  return verbTypes.indexOf(posTag) > -1;
}

function isAdjective(posTag: string) {
  return adjectiveTypes.indexOf(posTag) > -1;
}

function isAdverb(posTag: string) {
  return adverbTypes.indexOf(posTag) > -1;
}

function getFriendlyPOSName(posTag: string) {
  const posMap = constructBasicPOSMap();
  return posMap[posTag];
}

export {
  POSReference,
  posFriendlyNames,
  nounTypes,
  properNounTypes,
  verbTypes,
  adjectiveTypes,
  adverbTypes,
  constructBasicPOSMap,
  isNoun,
  isProperNoun,
  isVerb,
  isAdjective,
  isAdverb,
  getFriendlyPOSName,
};
