import { getFilmData, getCharacterHomeworld, getCharacterSpecies } from './apiCalls';

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
})
