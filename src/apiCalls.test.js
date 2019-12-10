import { getFilmData, getCharacterHomeworld, getCharacterSpecies, fetchIndividualData } from './apiCalls';

describe('API Calls', () => {
  describe('getFilmData', () => {
    let mockUrl;
    let mockResponse;

    beforeEach(() => {
      mockUrl = 'fartz';
      mockResponse = {
        characters: []
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should get back the film data that we want', () => {
      expect(getFilmData(mockUrl)).resolves.toEqual(mockResponse);
    });

    it('should run with the correct url', () => {
      getFilmData(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith('fartz')
    });

    it('should throw an error if response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getFilmData(mockUrl)).rejects.toEqual(Error('OH NO. THERE IS BLOOD EVERYWHERE'));
    });
  })

  describe('getCharacterHomeworld', () => {
    let mockUrl;
    let mockResponse;

    beforeEach(() => {
      mockUrl = 'babyYoda';
      mockResponse = {
        name: "no one knows"
      }

      window.fetch = jest.fn().mockImplementation((homeworld) => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should run with the correct url', () => {
      getCharacterHomeworld(mockUrl);

      expect(window.fetch).toHaveBeenCalledWith('babyYoda');
    })

    it('should return the correct homeworld', () => {
      expect(getCharacterHomeworld(mockUrl)).resolves.toEqual(mockResponse);
    })

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation((homeworld) => {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getCharacterHomeworld(mockUrl)).rejects.toEqual(Error('WE ARE TOO POWERFUL'));
    })
  })

  describe('getCharacterSpecies', () => {
    let mockUrl;
    let mockResponse;

    beforeEach(() => {
      mockUrl = 'popCornChocolate....NO';
      mockResponse = {
        name: "Yoda's species"
      }

      window.fetch = jest.fn().mockImplementation((species) => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should be run with the correct url', () => {
      getCharacterSpecies(mockUrl);

      expect(window.fetch).toHaveBeenCalledWith('popCornChocolate....NO');
    })

    it('should return the correct species', () => {
      expect(getCharacterSpecies(mockUrl)).resolves.toEqual(mockResponse);
    })

    it('should throw an error when a response is not ok', () => {
      window.fetch = jest.fn().mockImplementation((species) => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(getCharacterSpecies(mockUrl)).rejects.toEqual(Error('WE ARE TOO POWERFUL'));
    })
  })

  describe('fetchIndividualData', () => {
    let mockUrl;
    let mockResponse;

    beforeEach(() => {
      mockUrl = 'Run from Haboobs';
      mockResponse = {
        name: 'TRA$HA'
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: ()=> Promise.resolve(mockResponse)
        })
      })
    })

    it('should be run with correct URL', () => {
      fetchIndividualData(mockUrl);

      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    })

    it('should return correct response when fetchIndividualData is invoked', () => {
      expect(fetchIndividualData(mockUrl)).resolves.toEqual(mockResponse);
    })

    it('should return error message if response has a false ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      expect(fetchIndividualData(mockUrl)).rejects.toEqual(Error('BEN GET YOUR NIMBUS 2000'))
    })
  })
})
