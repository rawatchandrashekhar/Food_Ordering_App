import React from 'react'

function TestingCompo() {

    const customPromise = () => {
        let promise = new Promise((resolved, rejected) => {
            if (!true) {
                const data = {
                    name: "chandu",
                    country: "india"
                }
                resolved(data);
            } else {
                const err = new Error("cart is not valid")
                rejected(err);
            }
        })
        console.log({ promise });
        return promise;
    }

    const promise = customPromise();
    promise.then((result) => {
        console.log({ result });
    }).catch((error) => {
        console.log({ error });
    })

    const temp = React.useCallback(
        () => {
            console.log("callback run");
        },
        [],
    )

    React.useEffect(() => {
        console.log("useeffect run");
    }, [])

    temp();

    return (
        <div>TestingCompo</div>
    )
}

export default TestingCompo