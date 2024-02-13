export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }



    get HouseHTMLTemplate () {
        return `
        <div class="col-12">
            <div class="row bg-light rounded shadow border border-dark">
                <div class="col-md-4 px-0">
                <img
                    src="https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/I3BvjD2zREK0FinQCGoyqYrgkzVq3CNSOH2eNqik.jpg"
                    alt="" class="img-fluid rounded-start car-picture">
                </div>
                <div class="col-md-8 p-3">
                <h2>Price</h2>
                <h3>2 floors 4 bed 3 bath </h3>
                <div class="d-flex">
                    <h4>Listed by SOME DUDE</h4>
                    <img class="creator-picture"
                    src="https://media0.giphy.com/media/7zApYc8tI0fpsR4Rny/giphy.gif?cid=ecf05e47rjwmcrd6jmfmjmncs5x74gigwtvzhd4hus6b24jt&ep=v1_gifs_related&rid=giphy.gif&ct=g"
                    alt="">
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eius, sed quisquam eaque impedit voluptatem ex
                    pariatur commodi dolorum sapiente.</p>
                </div>
            </div>
            </div>
        `
    }
}