const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    try {
      const urlsSplits = url.split('/');
      const parsedUrl = {
        resource: this._sanitizeUrlPart(urlsSplits[1]),
        id: this._sanitizeUrlPart(urlsSplits[2]),
        verb: this._sanitizeUrlPart(urlsSplits[3]),
      };

      console.log('URL Parsing:', {
        original: url,
        splits: urlsSplits,
        parsed: parsedUrl
      });

      return parsedUrl;
    } catch (error) {
      console.error('Error splitting URL:', error);
      return {
        resource: null,
        id: null,
        verb: null,
      };
    }
  },

  _urlCombiner(splitedUrl) {
    try {
      const combinedUrl = (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
        + (splitedUrl.id ? '/:id' : '')
        + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');

      console.log('URL Combining:', {
        input: splitedUrl,
        result: combinedUrl
      });

      return combinedUrl;
    } catch (error) {
      console.error('Error combining URL:', error);
      return '/';
    }
  },

  _sanitizeUrlPart(part) {
    if (!part) return null;
    return part.replace(/[^a-zA-Z0-9-_]/g, '');
  },

  validateId(id) {
    if (!id) {
      console.log('validateId: ID is empty or null');
      return false;
    }

    const isValid = /^[a-zA-Z0-9-_]+$/.test(id);

    console.log('ID Validation:', {
      id,
      isValid,
      length: id.length,
      format: typeof id
    });

    return isValid;
  },

  getCleanId() {
    const parsed = this.parseActiveUrlWithoutCombiner();
    if (!parsed.id) return null;

    const cleanId = this._sanitizeUrlPart(parsed.id);
    console.log('Clean ID from URL:', cleanId);

    return cleanId;
  }
};

export default UrlParser;