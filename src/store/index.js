import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const movies = () => {
  return [{
    "id": 1,
    "title": "Inside",
    "description": "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis",
    "available": true
  },
  {
    "id": 2,
    "title": "Syrian Bride, The",
    "description": "augue aliquam erat volutpat in congue etiam justo etiam pretium",
    "available": true
  },
  {
    "id": 3,
    "title": "Big Bird Cage, The",
    "description": "risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
    "available": true
  },
  {
    "id": 4,
    "title": "Recollections of the Yellow House (Recordações da Casa Amarela)",
    "description": "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla",
    "available": false
  },
  {
    "id": 5,
    "title": "Old Boy",
    "description": "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
    "available": false
  },
  {
    "id": 6,
    "title": "Love on the Run (Amour en fuite, L')",
    "description": "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
    "available": true
  },
  {
    "id": 7,
    "title": "Doomwatch",
    "description": "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat",
    "available": false
  },
  {
    "id": 8,
    "title": "Airspeed",
    "description": "in eleifend quam a odio in hac habitasse platea dictumst maecenas",
    "available": false
  },
  {
    "id": 9,
    "title": "On Our Merry Way",
    "description": "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
    "available": true
  },
  {
    "id": 10,
    "title": "Happiness Is a Warm Blanket, Charlie Brown",
    "description": "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
    "available": false
  },
  {
    "id": 11,
    "title": "Cat from Outer Space, The",
    "description": "erat eros viverra eget congue eget semper rutrum nulla nunc",
    "available": true
  },
  {
    "id": 12,
    "title": "Melissa P.",
    "description": "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla",
    "available": false
  },
  {
    "id": 13,
    "title": "Another Year",
    "description": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
    "available": true
  },
  {
    "id": 14,
    "title": "Little Boy Blue",
    "description": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices",
    "available": false
  },
  {
    "id": 15,
    "title": "Teeth",
    "description": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    "available": true
  },
  {
    "id": 16,
    "title": "Manon of the Spring",
    "description": "primis in faucibus orci luctus et ultrices posuere cubilia curae",
    "available": false
  },
  {
    "id": 17,
    "title": "Emperor of the North (Emperor of the North Pole)",
    "description": "turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
    "available": false
  },
  {
    "id": 18,
    "title": "Big Trail, The",
    "description": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
    "available": false
  },
  {
    "id": 19,
    "title": "Tyler Perry's Daddy's Little Girls",
    "description": "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla",
    "available": false
  },
  {
    "id": 20,
    "title": "Day After Tomorrow, The",
    "description": "est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
    "available": false
  },
  {
    "id": 21,
    "title": "Pohjanmaa",
    "description": "justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
    "available": true
  },
  {
    "id": 22,
    "title": "Revolution #9",
    "description": "bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac",
    "available": true
  },
  {
    "id": 23,
    "title": "Vares: The Path of the Righteous Men (Vares - Kaidan tien kulkijat)",
    "description": "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
    "available": false
  },
  {
    "id": 24,
    "title": "That's Life!",
    "description": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper",
    "available": true
  },
  {
    "id": 25,
    "title": "Rory O'Shea Was Here (Inside I'm Dancing)",
    "description": "aliquam sit amet diam in magna bibendum imperdiet nullam orci",
    "available": true
  },
  {
    "id": 26,
    "title": "Roula",
    "description": "luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec",
    "available": true
  },
  {
    "id": 27,
    "title": "Uncle Nino",
    "description": "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
    "available": false
  },
  {
    "id": 28,
    "title": "Free Radicals:  A History of Experimental Film",
    "description": "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
    "available": false
  },
  {
    "id": 29,
    "title": "Yamla Pagla Deewana 2",
    "description": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
    "available": false
  },
  {
    "id": 30,
    "title": "Mindscape of Alan Moore, The",
    "description": "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
    "available": false
  },
  {
    "id": 31,
    "title": "F/X",
    "description": "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed",
    "available": false
  },
  {
    "id": 32,
    "title": "Lilo & Stitch",
    "description": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper",
    "available": true
  },
  {
    "id": 33,
    "title": "House of Seven Corpses, The",
    "description": "eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
    "available": true
  },
  {
    "id": 34,
    "title": "Soldier of Orange (a.k.a. Survival Run) (Soldaat van Oranje)",
    "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
    "available": false
  },
  {
    "id": 35,
    "title": "Freakonomics",
    "description": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
    "available": true
  },
  {
    "id": 36,
    "title": "Violet & Daisy",
    "description": "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
    "available": false
  },
  {
    "id": 37,
    "title": "Safe in Hell",
    "description": "maecenas tristique est et tempus semper est quam pharetra magna ac",
    "available": false
  },
  {
    "id": 38,
    "title": "The Dark Valley",
    "description": "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio",
    "available": false
  },
  {
    "id": 39,
    "title": "Last Song, The",
    "description": "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
    "available": false
  },
  {
    "id": 40,
    "title": "Battle of the Warriors",
    "description": "tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
    "available": false
  },
  {
    "id": 41,
    "title": "Slumber Party '57",
    "description": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam",
    "available": false
  },
  {
    "id": 42,
    "title": "Excuse Me Darling, But Lucas Loved Me",
    "description": "mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
    "available": true
  },
  {
    "id": 43,
    "title": "Kevin & Perry Go Large",
    "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
    "available": true
  },
  {
    "id": 44,
    "title": "Beat That My Heart Skipped, The (battre mon coeur s'est arrêté, De)",
    "description": "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
    "available": true
  },
  {
    "id": 45,
    "title": "Mad Bastards",
    "description": "dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
    "available": true
  },
  {
    "id": 46,
    "title": "Abraham's Valley (Vale Abraão)",
    "description": "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh",
    "available": true
  },
  {
    "id": 47,
    "title": "Jodorowsky's Dune",
    "description": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
    "available": true
  },
  {
    "id": 48,
    "title": "Serpico",
    "description": "accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
    "available": false
  },
  {
    "id": 49,
    "title": "Business of Fancydancing, The",
    "description": "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
    "available": true
  },
  {
    "id": 50,
    "title": "Choices",
    "description": "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
    "available": true
  },
  {
    "id": 51,
    "title": "Arsenic and Old Lace",
    "description": "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    "available": true
  },
  {
    "id": 52,
    "title": "Delta Force, The",
    "description": "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique",
    "available": true
  },
  {
    "id": 53,
    "title": "These Are the Damned (a.k.a. The Damned)",
    "description": "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
    "available": true
  },
  {
    "id": 54,
    "title": "Education, An",
    "description": "et ultrices posuere cubilia curae mauris viverra diam vitae quam",
    "available": true
  },
  {
    "id": 55,
    "title": "Bomber",
    "description": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
    "available": true
  },
  {
    "id": 56,
    "title": "Winnie the Pooh",
    "description": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut",
    "available": true
  },
  {
    "id": 57,
    "title": "Dead Man's Bluff",
    "description": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
    "available": true
  },
  {
    "id": 58,
    "title": "Creep",
    "description": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
    "available": false
  },
  {
    "id": 59,
    "title": "SS Experiment Love Camp (Lager SSadis Kastrat Kommandantur)",
    "description": "in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
    "available": true
  },
  {
    "id": 60,
    "title": "Blazing Guns",
    "description": "quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh",
    "available": true
  },
  {
    "id": 61,
    "title": "California",
    "description": "platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
    "available": true
  },
  {
    "id": 62,
    "title": "Hypnotist, The (Hypnotisören)",
    "description": "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non",
    "available": false
  },
  {
    "id": 63,
    "title": "Farewell My Concubine (Ba wang bie ji)",
    "description": "in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
    "available": false
  },
  {
    "id": 64,
    "title": "On the Edge (Hak bak do)",
    "description": "vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget",
    "available": false
  },
  {
    "id": 65,
    "title": "Sheepman, The",
    "description": "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
    "available": true
  },
  {
    "id": 66,
    "title": "King, The",
    "description": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut",
    "available": true
  },
  {
    "id": 67,
    "title": "Once Upon a Time in Anatolia (Bir zamanlar Anadolu'da)",
    "description": "ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus",
    "available": false
  },
  {
    "id": 68,
    "title": "Ernest Saves Christmas",
    "description": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum",
    "available": false
  },
  {
    "id": 69,
    "title": "Kill Buljo: The Movie",
    "description": "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
    "available": true
  },
  {
    "id": 70,
    "title": "Cider House Rules, The",
    "description": "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
    "available": true
  },
  {
    "id": 71,
    "title": "$9.99",
    "description": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis",
    "available": true
  },
  {
    "id": 72,
    "title": "Body of Water (Syvälle salattu)",
    "description": "porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",
    "available": false
  },
  {
    "id": 73,
    "title": "Lumberjacking (Nuoruuteni savotat)",
    "description": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
    "available": true
  },
  {
    "id": 74,
    "title": "What to Do in Case of Fire (Was tun, wenn's brennt?)",
    "description": "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id",
    "available": true
  },
  {
    "id": 75,
    "title": "Kabul Express",
    "description": "pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus",
    "available": false
  },
  {
    "id": 76,
    "title": "Chopper",
    "description": "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
    "available": false
  },
  {
    "id": 77,
    "title": "Humanoids from the Deep",
    "description": "sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque",
    "available": true
  },
  {
    "id": 78,
    "title": "Hanna",
    "description": "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
    "available": true
  },
  {
    "id": 79,
    "title": "Reefer Madness (a.k.a. Tell Your Children)",
    "description": "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
    "available": true
  },
  {
    "id": 80,
    "title": "La Luna",
    "description": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo",
    "available": false
  },
  {
    "id": 81,
    "title": "It! The Terror from Beyond Space",
    "description": "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper",
    "available": false
  },
  {
    "id": 82,
    "title": "Millions Game, The (Das Millionenspiel)",
    "description": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    "available": true
  },
  {
    "id": 83,
    "title": "Basket Case",
    "description": "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius",
    "available": true
  },
  {
    "id": 84,
    "title": "Letter to Momo, A (Momo e no tegami)",
    "description": "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
    "available": true
  },
  {
    "id": 85,
    "title": "Story of the Late Chrysanthemums, The (Zangiku monogatari)",
    "description": "et tempus semper est quam pharetra magna ac consequat metus sapien",
    "available": true
  },
  {
    "id": 86,
    "title": "Angels Crest",
    "description": "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
    "available": false
  },
  {
    "id": 87,
    "title": "Tequila Sunrise",
    "description": "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam",
    "available": true
  },
  {
    "id": 88,
    "title": "Black Sea",
    "description": "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
    "available": false
  },
  {
    "id": 89,
    "title": "Towering Inferno, The",
    "description": "at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
    "available": false
  },
  {
    "id": 90,
    "title": "Rapid Fire",
    "description": "donec dapibus duis at velit eu est congue elementum in",
    "available": false
  },
  {
    "id": 91,
    "title": "Charleston",
    "description": "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat",
    "available": true
  },
  {
    "id": 92,
    "title": "Mother Dao, the Turtlelike (Moeder Dao, de schildpadgelijkende)",
    "description": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
    "available": false
  },
  {
    "id": 93,
    "title": "Black Orchid, The",
    "description": "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis",
    "available": true
  },
  {
    "id": 94,
    "title": "Get Real",
    "description": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
    "available": true
  },
  {
    "id": 95,
    "title": "Election Day",
    "description": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
    "available": true
  },
  {
    "id": 96,
    "title": "Von Ryan's Express",
    "description": "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis",
    "available": true
  },
  {
    "id": 97,
    "title": "One Way Boogie Woogie",
    "description": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis",
    "available": false
  },
  {
    "id": 98,
    "title": "Valet, The (La doublure)",
    "description": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
    "available": true
  },
  {
    "id": 99,
    "title": "Umberto D.",
    "description": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
    "available": true
  },
  {
    "id": 100,
    "title": "Tunes of Glory",
    "description": "ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
    "available": true
  }
  ]
}

  export default new Vuex.Store({
    state: {

      movies: movies(),

      filter: {
        query: '',
        available: true
      }

    },

    mutations: {

      SET_QUERY(state, query) {
        state.filter.query = query;
      },

      SET_AVAILABLE(state) {
        state.filter.available = !state.filter.available;
      }

    },

    getters: {
      filteredMovies(state) {
        let movies = state.movies.filter(movie => movie.available === state.filter.available);
        if (state.filter.query.length > 2) {
          return movies.filter(movie => movie.title.toLowerCase().includes(state.filter.query));
        }
        return movies;
      }
    }
  })