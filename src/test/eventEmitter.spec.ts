const expect = require('expect.js')
const EventEmitter = require('../utils/event-emitter').default

describe('Start test event-emitter function', function () {
  let eventEmitter = new EventEmitter()

  it('should eventCenter not empty', function () {
    eventEmitter.on('test', testFun)
    expect(eventEmitter.eventCenter.length).to.be(1)
  })

  it('should test event can be off', function () {
    eventEmitter.off('test', testFun)
    expect(eventEmitter.eventCenter.length).to.be(1)
    expect(eventEmitter.eventCenter[0].callback.length).to.be(0)
  })

  it('should event can be fired', function () {
    this.timeout(0)
    eventEmitter.on('test-emit', function (params: number) {
      expect(params).to.be(123)
    })
    eventEmitter.emit('test-emit', 123)
  })
})

function testFun(msg: string) {
  console.log(msg)
}