
    window.local = {
        setLocal: function(key, data){
            if (!key) {
                console.error("key不能为空")
                return ''
              }
              if (data) {
                if (typeof data === "object") {
                  localStorage.setItem(key, JSON.stringify(data))
                } else {
                  localStorage.setItem(key, data)
                }
              } else {
                try {
                  return JSON.parse(localStorage.getItem(key))
                } catch (e) {
                  return localStorage.getItem(key)
                }
              }
        },
        removeLocal: function(key){
            localStorage.removeItem(key)
        }
    }


