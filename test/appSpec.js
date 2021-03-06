define(['app', 'jquery', 'underscore', 'should'], function(App, $, _, should) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(el.text()).toEqual('require.js up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

        describe('should', function () {

            it("equal works", function () {
                "1".should.equal("1");
            });

            it("equal exactly works", function () {
                (5).should.be.exactly(5).and.be.a.Number;
            });
        });

    });

});
