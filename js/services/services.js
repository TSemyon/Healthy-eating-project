const postData = async (url, data) => {
   let res = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json'
      },
      body: data
   })

   return await res.json()
}

const getResource = async (url) => {
   let res = await fetch(url)

   if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
   }
   return await res.json()
}

const validateInput = (regex, input) => {
   return regex.test(input)
}

export {validateInput}
export {postData}
export {getResource}