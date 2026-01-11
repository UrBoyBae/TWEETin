document.addEventListener("DOMContentLoaded", () => {
    const originalData = [];
    let tempData = [];

    // Get All Data Tweet
    async function getAllDataTweet() {
        try {
            const response = await fetch(
                "https://pabcl.codelabspace.or.id/social-posts"
            );

            if (!response.ok) {
                throw new Error("Gagal mengambil data");
            }

            const json = await response.json();
            const datas = json.data;
            originalData.push(...datas);

            const containerAllTweet = document.getElementById("all-tweet");
            const textTotalTweet = document.getElementById("total-tweet");

            containerAllTweet.innerHTML = "";
            
            if (datas.length === 0) {
                containerAllTweet.style.paddingTop = "25px";
                containerAllTweet.insertAdjacentHTML("afterbegin",`
                    <span class="tweet-not-found">Tweet not found !</span>    
                `)
            }

            textTotalTweet.textContent = datas.length + " Tweet";
            datas.forEach((data)=> {
                containerAllTweet.insertAdjacentHTML("afterbegin",`
                    <div class="card-tweet">
                        <div class="card-tweet-top">
                            <img src="./asset/images/user.png" alt="user">
                            <div class="group-title-tweet">
                                <span class="title-tweet">
                                    ` + data.title + `
                                </span>
                                <span class="username-tweet">
                                    by ` + data.username + `
                                </span>
                            </div>
                        </div>
                        <span class="content-tweet">
                            ` + data.content + `
                        </span>
                    </div>
                `)
            });
        } catch (error) {
            console.log("Error : ", error);
        }
    }

    // Function Searcbar Web View
    document.getElementById("search-bar").addEventListener("keyup", (e) => {
        tempData = []
        const containerAllTweet = document.getElementById("all-tweet");
        const textTotalTweet = document.getElementById("total-tweet");

        if (e.target.value === "") {
            containerAllTweet.innerHTML = "";

            originalData.forEach((data) => {
                textTotalTweet.textContent = originalData.length + " Tweet";
                containerAllTweet.insertAdjacentHTML("afterbegin",`
                    <div class="card-tweet">
                        <div class="card-tweet-top">
                            <img src="./asset/images/user.png" alt="user">
                            <div class="group-title-tweet">
                                <span class="title-tweet">
                                    ` + data.title + `
                                </span>
                                <span class="username-tweet">
                                    by ` + data.username + `
                                </span>
                            </div>
                        </div>
                        <span class="content-tweet">
                            ` + data.content + `
                        </span>
                    </div>
                `)
            })
        }

        originalData.forEach((data) => {
            let titleTweet = data.title;
            if(titleTweet.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                tempData.push(data);
            }
        })

        containerAllTweet.innerHTML = "";
        
        if (tempData.length === 0) {
            containerAllTweet.style.borderTop = "2px solid #C2C2C2";
            containerAllTweet.style.paddingTop = "25px";
            containerAllTweet.insertAdjacentHTML("afterbegin",`
                <span class="tweet-not-found">Tweet not found !</span>    
            `)
        } else {
            containerAllTweet.style.removeProperty("border-top");
            containerAllTweet.style.removeProperty("padding-top");
        }

        textTotalTweet.textContent = tempData.length + " Tweet";
        tempData.forEach((data)=> {
            containerAllTweet.insertAdjacentHTML("afterbegin",`
                <div class="card-tweet">
                    <div class="card-tweet-top">
                        <img src="./asset/images/user.png" alt="user">
                        <div class="group-title-tweet">
                            <span class="title-tweet">
                                ` + data.title + `
                            </span>
                            <span class="username-tweet">
                                by ` + data.username + `
                            </span>
                        </div>
                    </div>
                    <span class="content-tweet">
                        ` + data.content + `
                    </span>
                </div>
            `)
        });
    });

    // Function Searcbar Mobile View
    document.getElementById("search-bar-mobile-view").addEventListener("keyup", (e) => {
        tempData = []
        const containerAllTweet = document.getElementById("all-tweet");
        const textTotalTweet = document.getElementById("total-tweet");

        if (e.target.value === "") {
            containerAllTweet.innerHTML = "";

            originalData.forEach((data) => {
                textTotalTweet.textContent = originalData.length + " Tweet";
                containerAllTweet.insertAdjacentHTML("afterbegin",`
                    <div class="card-tweet">
                        <div class="card-tweet-top">
                            <img src="./asset/images/user.png" alt="user">
                            <div class="group-title-tweet">
                                <span class="title-tweet">
                                    ` + data.title + `
                                </span>
                                <span class="username-tweet">
                                    by ` + data.username + `
                                </span>
                            </div>
                        </div>
                        <span class="content-tweet">
                            ` + data.content + `
                        </span>
                    </div>
                `)
            })
        }

        originalData.forEach((data) => {
            let titleTweet = data.title;
            if(titleTweet.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                tempData.push(data);
            }
        })

        containerAllTweet.innerHTML = "";
        
        if (tempData.length === 0) {
            containerAllTweet.style.borderTop = "2px solid #C2C2C2";
            containerAllTweet.style.paddingTop = "25px";
            containerAllTweet.insertAdjacentHTML("afterbegin",`
                <span class="tweet-not-found">Tweet not found !</span>    
            `)
        } else {
            containerAllTweet.style.removeProperty("border-top");
            containerAllTweet.style.removeProperty("padding-top");
        }

        textTotalTweet.textContent = tempData.length + " Tweet";
        tempData.forEach((data)=> {
            containerAllTweet.insertAdjacentHTML("afterbegin",`
                <div class="card-tweet">
                    <div class="card-tweet-top">
                        <img src="./asset/images/user.png" alt="user">
                        <div class="group-title-tweet">
                            <span class="title-tweet">
                                ` + data.title + `
                            </span>
                            <span class="username-tweet">
                                by ` + data.username + `
                            </span>
                        </div>
                    </div>
                    <span class="content-tweet">
                        ` + data.content + `
                    </span>
                </div>
            `)
        });
    });

    // Logic Input Username
    var usernameTweetLength = document.getElementById("username-tweet-length");
    var maxUsername = 12;

    document.getElementById("input-username-tweet").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/^\s+/, "");
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s]/g, "");

        usernameTweetLength.innerHTML = "";

        if(e.target.value === "") {
            usernameTweetLength.innerHTML = "0/" + maxUsername;
        }

        e.target.value.trimEnd().length > maxUsername ? usernameTweetLength.style.color = "red" : usernameTweetLength.style.color = "#1F2937";
        usernameTweetLength.innerHTML = e.target.value.trimEnd().length + "/" + maxUsername;
    })

    document.getElementById("input-username-tweet").addEventListener("focus", (e) => {
        if(e.target.value === "") {
            usernameTweetLength.innerHTML = "0/" + maxUsername;
        }

        usernameTweetLength.innerHTML = e.target.value.length + "/" + maxUsername;
    })

    document.getElementById("input-username-tweet").addEventListener("blur", (e) => {
        if(e.target.value === "") {
            usernameTweetLength.innerHTML = "";
        }
        
        e.target.value = e.target.value.replace(/\s+$/, "");
    })

    // Logic Input Title
    var titleTweetLength = document.getElementById("title-tweet-length");
    var maxTitle = 70;

    document.getElementById("input-title-tweet").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/^\s+/, "");
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s()'",.\-?!:;]/g, "");

        titleTweetLength.innerHTML = "";

        if(e.target.value === "") {
            titleTweetLength.innerHTML = "0/" + maxTitle;
        }

        e.target.value.trimEnd().length > maxTitle ? titleTweetLength.style.color = "red" : titleTweetLength.style.color = "#1F2937";
        titleTweetLength.innerHTML = e.target.value.trimEnd().length + "/" + maxTitle;
    });

    document.getElementById("input-title-tweet").addEventListener("focus", (e) => {
        if(e.target.value === "") {
            titleTweetLength.innerHTML = "0/" + maxTitle;
        }

        titleTweetLength.innerHTML = e.target.value.length + "/" + maxTitle;
    })

    document.getElementById("input-title-tweet").addEventListener("blur", (e) => {
        if(e.target.value === "") {
            titleTweetLength.innerHTML = "";
        }

        e.target.value = e.target.value.replace(/\s+$/, "");
    })

    // Logic Input Content
    var contentTweetLength = document.getElementById("content-tweet-length");
    var maxContent = 300;

    document.getElementById("input-content-tweet").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/^\s+/, "");
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s()'",.\-?!:;]/g, "");

        contentTweetLength.innerHTML = maxContent - e.target.value.trimEnd().length;
        var persenContentTweetLength = (e.target.value.trimEnd().length / maxContent) * 100;

        var colorProgressDonut = e.target.value.trimEnd().length > maxContent ? "red" : "#6359e9";
        
        document.getElementsByClassName("progress-donut")[0].style.background = "conic-gradient(" + colorProgressDonut + " " + persenContentTweetLength + "%, #e5e7eb 0)";
    });

    document.getElementById("input-content-tweet").addEventListener("blur", (e) => {
        e.target.value = e.target.value.replace(/\s+$/, "");
    });

    // Post Data Tweet
    async function postDataTweet(data) {
        try {
            const response = await fetch(
                "https://pabcl.codelabspace.or.id/social-posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            if (!response.ok) {
                throw new Error("Gagal menambah tweet");
            }

            const result = await response.json();
            
            if(result.success){
                document.getElementById("toast-message").innerHTML = "Berhasil menambahkan tweet baru!"
                document.getElementById("toast").classList.add("toast-active");
                setTimeout(() => {
                    document.getElementById("toast").classList.remove("toast-active");
                }, 3000);
            }

            await getAllDataTweet();
        } catch (error) {
            console.log("Error : ", error);
        }
    }

    document.getElementById("form-new-tweet").addEventListener("submit", async (e) => {
        e.preventDefault();

        var username = document.getElementById("input-username-tweet").value.trim();
        var title = document.getElementById("input-title-tweet").value.trim();
        var content = document.getElementById("input-content-tweet").value.trim();

        var errorText = "";
        if(username.length > 12) {
            errorText += "\nUsername tidak boleh melebihi 12 karakter !\n\n";
        }

        if(title.length > 70) {
            errorText += "Title tidak boleh melebihi 70 karakter !\n\n";
        }

        if(content.length > 300) {
            errorText += "Content tidak boleh melebihi 300 karakter !\n\n";
        }

        if (errorText) {
            alert(errorText);
            return;
        }

        await postDataTweet({title, content, username});

        e.target.reset();

        var usernameTweetLength = document.getElementById("username-tweet-length");
        var titleTweetLength = document.getElementById("title-tweet-length");
        var contentTweetLength = document.getElementById("content-tweet-length");

        usernameTweetLength.innerHTML = "";
        titleTweetLength.innerHTML = "";
        contentTweetLength.innerHTML = "300";
        document.getElementsByClassName("progress-donut")[0].style.background = "conic-gradient(#6359e9 0%, #e5e7eb 0)";
    })

    getAllDataTweet();
})

