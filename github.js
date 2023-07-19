class Github {
    // İstek atmak için gerekli olan bilgiler
    constructor() {
      this.clientId = '0ea234f47ff990e7fa07' ;
      this.clientSecret = 'd63f74c166bfa09c397d2e1abfdd4506076d8e44' ;
      this.PerPage = 10;
      this.sort = 'asc'
    }
    
    // apiden kullanıcı bilgisini alır 
    async getUser(username) {
        // parametre olarak gelen kullanıcı bilgisine istek atma
      const profileRes = await fetch
      (`https://api.github.com/users/${username}? client_id=${this.clientId}&client_secret=${this.clientSecret}`)

      // repo bilgilerini alma
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.PerPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)

    //   gelen cevabı json a çevirme
    const profile= await profileRes.json()
    const repos = await repoRes.json()
     
    return  {
      profile,
      repos
    }
    }
}
export default Github;