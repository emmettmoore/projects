import getVerticalOrHorizontalMove from './getVerticalOrHorizontalMove';

describe(`getVerticalOrHorizontalMove`, () => {
  describe(`no movement`, () => {
    describe(`vertical/horizontal adjacent`, () => {
      it(`returns null for no movement`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 0, y: 0 }, { x: 0, y: 0 })
        ).toEqual(null);
      });

      it(`returns null for head 1 space right of tail`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 1, y: 0 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 1 space left of tail`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: -1, y: 0 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 1 space above tail`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 0, y: 1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 1 space below tail`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 0, y: -1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
    });

    describe(`diagonal adjacent`, () => {
      it(`returns null for head 1 space diagonal up-right`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 1, y: 1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 1 space diagonal down-right`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 1, y: -1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 1 space diagonal up-left`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: -1, y: 1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 1 space diagonal down-left`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: -1, y: -1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
    });
    describe(`diagonal two steps away skips`, () => {
      it(`returns null for head 2 space up 1 space right`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 1, y: 2 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 2 space down 1 space right`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 1, y: -2 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 2 space right 1 space up`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 2, y: 1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
      it(`returns null for head 2 space left 1 space up`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: -2, y: 1 }, { x: 0, y: 0 })
        ).toEqual(null);
      });
    });
  });
  describe(`movement`, () => {
    describe(`directly adjacent vertical/horizontal`, () => {
      it(`two above`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 0, y: 2 }, { x: 0, y: 0 })
        ).toEqual({ x: 0, y: 1 });
      });
      it(`two below`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 0, y: -2 }, { x: 0, y: 0 })
        ).toEqual({ x: 0, y: -1 });
      });
      it(`two left`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: -2, y: 0 }, { x: 0, y: 0 })
        ).toEqual({ x: -1, y: 0 });
      });
      it(`two right`, () => {
        expect(
          getVerticalOrHorizontalMove({ x: 2, y: 0 }, { x: 0, y: 0 })
        ).toEqual({ x: 1, y: 0 });
      });
    });
  });
});
