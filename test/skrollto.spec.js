import chai from 'chai';
import skrollto from '../src/index';

chai.expect();

const expect = chai.expect;

describe('skrollto', () => {
    it('should call callback after scroll finish', () => {
        let report = 'start';

        skrollto(0, undefined, undefined, () => {
            report = 'finish';
            expect(report).to.be.equal('finish');
        });

        expect(report).to.be.equal('start');
    });
});
