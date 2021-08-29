const UserService = require("./UserService")
// @ponicode
describe("UserService.checkUsernameAvailability", () => {
    test("0", () => {
        let callFunction = () => {
            UserService.checkUsernameAvailability(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            UserService.checkUsernameAvailability("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            UserService.checkUsernameAvailability(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            UserService.checkUsernameAvailability("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            UserService.checkUsernameAvailability(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            UserService.checkUsernameAvailability(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("UserService.getCurrentUser", () => {
    test("0", () => {
        let callFunction = () => {
            UserService.getCurrentUser()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("UserService.getUserProfile", () => {
    test("0", () => {
        let callFunction = () => {
            UserService.getUserProfile("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            UserService.getUserProfile(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            UserService.getUserProfile(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            UserService.getUserProfile("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            UserService.getUserProfile(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            UserService.getUserProfile(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("UserService.getUserById", () => {
    test("0", () => {
        let callFunction = () => {
            UserService.getUserById(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            UserService.getUserById(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            UserService.getUserById(7588892)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            UserService.getUserById(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            UserService.getUserById(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            UserService.getUserById(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("UserService.getAllUsers", () => {
    test("0", () => {
        let callFunction = () => {
            UserService.getAllUsers()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("UserService.updateUser", () => {
    test("0", () => {
        let callFunction = () => {
            UserService.updateUser("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            UserService.updateUser("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            UserService.updateUser("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            UserService.updateUser("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            UserService.updateUser("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            UserService.updateUser(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
