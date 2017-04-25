import houseVideos from './houseVideos';
import tranceVideos from './tranceVideos';
import dubstepVideos from './dubstepVideos';
import drumAndBassVideos from './drumAndBassVideos';
import hardstyleVideos from './hardstyleVideos';
import trapVideos from './trapVideos';
import electroVideos from './electroVideos';
import moombahtonVideos from './moombahtonVideos';
import wildcardsVideos from './wildcardsVideos';
import bigRoomHouseVideos from './bigRoomHouseVideos';

const genres =  [
                { id: 1, 
                  genre: 'Trance', 
                  link: 'trance', 
                  videos: tranceVideos,
                  description: 'Are you saying "trance, trance, trance"? Lost in crescendos?'
                }, 
                { id: 2, 
                  genre: 'House', 
                  link: 'house', 
                  videos: houseVideos,
                  description: '4/4 beat? Are you saying "boots and cats?" Probably house.'
                },
                {
                  id: 3,
                  genre: 'Big Room House',
                  link: 'bigroomhouse',
                  videos: bigRoomHouseVideos,
                  description: 'Harder and Louder than house, slower and deeper than hardstyle.'
                },
                { id: 4, 
                  genre: 'Drum and Bass', 
                  link: 'drumandbass', 
                  videos: drumAndBassVideos,
                  description: 'Fast, deep, bass? You know this one.'
                }, 
                { id: 5, 
                  genre: 'Dubstep', 
                  link: 'dubstep', 
                  videos: dubstepVideos,
                  description: 'Wobbles and drops? Does it sound like robots fighting?'
                },
                { id: 6, 
                  genre: 'Hardstyle', 
                  link: 'hardstyle', 
                  videos: hardstyleVideos,
                  description: 'Are you imagining a Dutch person on a pogo-stick playing Mario Kart?'
                }, 
                { id: 7, 
                  genre: 'Trap', 
                  link: 'trap', 
                  videos: trapVideos,
                  description: 'Southern hip-hop meets EDM. Are you twerking?'
                }, 
                { id: 8, 
                  genre: 'Electro', 
                  link: 'electro', 
                  videos: electroVideos,
                  description: 'Synth-heavy with funk roots.'
                }, 
                { id: 9, 
                  genre: 'Moombahton', 
                  link: 'moombahton', 
                  videos: moombahtonVideos,
                  description: 'House crashes into Reggaeton at the low, low speed of 110bpm.'
                }, 
                { id: 10, 
                  genre: 'Wildcards', 
                  link: 'wildcards', 
                  videos: wildcardsVideos,
                  description: 'Where do YOU think these fit in?'
                }
              ];

export default genres;









