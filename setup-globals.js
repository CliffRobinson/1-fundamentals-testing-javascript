async function test(title, callback) {
    try {
        await callback()
        console.log(`WOOHOO!! ${title}`)
    } catch (error) {
        console.error(`OH NOOOOO! ${title}`)
        console.error(error)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error (`${actual} is not equal to ${expected}`)
            }
        }
    }
}

global.test = test
global.expect = expect