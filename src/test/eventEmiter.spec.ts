const expect = require('expect.js')
const EventEmiter = require('../utils/event-emiter').default

describe('Start test event-emiter function', function () {
  let eventEmiter = new EventEmiter()

  it('should eventCenter not empty', function () {
    eventEmiter.on('test', testFun)
    expect(eventEmiter.eventCenter.length).to.be(1)
  })

  it('should test event can be off', function () {
    eventEmiter.off('test', testFun)
    expect(eventEmiter.eventCenter.length).to.be(1)
    expect(eventEmiter.eventCenter[0].callback.length).to.be(0)
  })
})

function testFun(msg: string) {
  console.log(msg)
}