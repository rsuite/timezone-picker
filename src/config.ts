import { utcOffset } from './utils';

export interface TimezoneListItem {
  city: string;
  district: string;
  tz: string;
  districtCity: string;
  utcOffset: number;
}
export const WORLD_MAIN_CITY_TIMEZONE_LIST: TimezoneListItem[] = [
  {
    city: 'Midway',
    district: 'Pacific',
    tz: '-11',
  },
  {
    city: 'Niue',
    district: 'Pacific',
    tz: '-11',
  },
  {
    city: 'Pago Pago',
    district: 'Pacific',
    tz: '-11',
  },
  {
    city: 'Adak',
    district: 'America',
    tz: '-10',
  },
  {
    city: 'Honolulu',
    district: 'Pacific',
    tz: '-10',
  },
  {
    city: 'Rarotonga',
    district: 'Pacific',
    tz: '-10',
  },
  {
    city: 'Tahiti',
    district: 'Pacific',
    tz: '-10',
  },
  {
    city: 'Marquesas',
    district: 'Pacific',
    tz: '-9:30',
  },
  {
    city: 'Anchorage',
    district: 'America',
    tz: '-9',
  },
  {
    city: 'Juneau',
    district: 'America',
    tz: '-9',
  },
  {
    city: 'Metlakatla',
    district: 'America',
    tz: '-9',
  },
  {
    city: 'Nome',
    district: 'America',
    tz: '-9',
  },
  {
    city: 'Sitka',
    district: 'America',
    tz: '-9',
  },
  {
    city: 'Yakutat',
    district: 'America',
    tz: '-9',
  },
  {
    city: 'Gambier',
    district: 'Pacific',
    tz: '-9',
  },
  {
    city: 'Los Angeles',
    district: 'America',
    tz: '-8',
  },
  {
    city: 'Tijuana',
    district: 'America',
    tz: '-8',
  },
  {
    city: 'Vancouver',
    district: 'America',
    tz: '-8',
  },
  {
    city: 'Pitcairn',
    district: 'Pacific',
    tz: '-8',
  },
  {
    city: 'Boise',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Cambridge Bay',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Chihuahua',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Creston',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Dawson',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Dawson Creek',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Denver',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Edmonton',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Fort Nelson',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Hermosillo',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Inuvik',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Mazatlan',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Ojinaga',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Phoenix',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Whitehorse',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Yellowknife',
    district: 'America',
    tz: '-7',
  },
  {
    city: 'Bahia Banderas',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Belize',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Chicago',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Costa Rica',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'El Salvador',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Guatemala',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Managua',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Matamoros',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Menominee',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Merida',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Mexico City',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Monterrey',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'North Dakota',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'North Dakota',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'North Dakota',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Rainy River',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Rankin Inlet',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Regina',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Resolute',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Swift Current',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Tegucigalpa',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Winnipeg',
    district: 'America',
    tz: '-6',
  },
  {
    city: 'Easter',
    district: 'Pacific',
    tz: '-6',
  },
  {
    city: 'Galapagos',
    district: 'Pacific',
    tz: '-6',
  },
  {
    city: 'Atikokan',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Bogota',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Cancun',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Cayman',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Detroit',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Eirunepe',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Grand Turk',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Guayaquil',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Havana',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Indiana',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Iqaluit',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Jamaica',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Kentucky',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Kentucky',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Lima',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Nassau',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'New York',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Nipigon',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Panama',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Pangnirtung',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Port-au-Prince',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Rio Branco',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Thunder Bay',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Toronto',
    district: 'America',
    tz: '-5',
  },
  {
    city: 'Anguilla',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Antigua',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Aruba',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Asuncion',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Barbados',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Blanc-Sablon',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Boa Vista',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Campo Grande',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Caracas',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Cuiaba',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Curacao',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Dominica',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Glace Bay',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Goose Bay',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Grenada',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Guadeloupe',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Guyana',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Halifax',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Kralendijk',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'La Paz',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Lower Princes',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Manaus',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Marigot',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Martinique',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Moncton',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Montserrat',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Porto Velho',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Port of Spain',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Puerto Rico',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Santiago',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Santo Domingo',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'St Barthelemy',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'St Kitts',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'St Lucia',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'St Thomas',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'St Vincent',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Thule',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Tortola',
    district: 'America',
    tz: '-4',
  },
  {
    city: 'Bermuda',
    district: 'Atlantic',
    tz: '-4',
  },
  {
    city: 'St Johns',
    district: 'America',
    tz: '-3:30',
  },
  {
    city: 'Araguaina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Argentina',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Bahia',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Belem',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Cayenne',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Fortaleza',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Godthab',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Maceio',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Miquelon',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Montevideo',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Paramaribo',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Punta Arenas',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Recife',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Santarem',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Sao Paulo',
    district: 'America',
    tz: '-3',
  },
  {
    city: 'Palmer',
    district: 'Antarctica',
    tz: '-3',
  },
  {
    city: 'Rothera',
    district: 'Antarctica',
    tz: '-3',
  },
  {
    city: 'Stanley',
    district: 'Atlantic',
    tz: '-3',
  },
  {
    city: 'Noronha',
    district: 'America',
    tz: '-2',
  },
  {
    city: 'South Georgia',
    district: 'Atlantic',
    tz: '-2',
  },
  {
    city: 'Scoresbysund',
    district: 'America',
    tz: '-1',
  },
  {
    city: 'Azores',
    district: 'Atlantic',
    tz: '-1',
  },
  {
    city: 'Cape Verde',
    district: 'Atlantic',
    tz: '-1',
  },
  {
    city: 'Abidjan',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Accra',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Bamako',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Banjul',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Bissau',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Conakry',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Dakar',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Freetown',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Lome',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Monrovia',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Nouakchott',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Ouagadougou',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Sao Tome',
    district: 'Africa',
    tz: '+0',
  },
  {
    city: 'Danmarkshavn',
    district: 'America',
    tz: '+0',
  },
  {
    city: 'Troll',
    district: 'Antarctica',
    tz: '+0',
  },
  {
    city: 'Canary',
    district: 'Atlantic',
    tz: '+0',
  },
  {
    city: 'Faroe',
    district: 'Atlantic',
    tz: '+0',
  },
  {
    city: 'Madeira',
    district: 'Atlantic',
    tz: '+0',
  },
  {
    city: 'Reykjavik',
    district: 'Atlantic',
    tz: '+0',
  },
  {
    city: 'St Helena',
    district: 'Atlantic',
    tz: '+0',
  },
  {
    city: 'Guernsey',
    district: 'Europe',
    tz: '+0',
  },
  {
    city: 'Isle of Man',
    district: 'Europe',
    tz: '+0',
  },
  {
    city: 'Jersey',
    district: 'Europe',
    tz: '+0',
  },
  {
    city: 'Lisbon',
    district: 'Europe',
    tz: '+0',
  },
  {
    city: 'London',
    district: 'Europe',
    tz: '+0',
  },
  {
    city: 'Algiers',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Bangui',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Brazzaville',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Casablanca',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Ceuta',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Douala',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'El Aaiun',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Kinshasa',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Lagos',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Libreville',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Luanda',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Malabo',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Ndjamena',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Niamey',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Porto-Novo',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Tunis',
    district: 'Africa',
    tz: '+1',
  },
  {
    city: 'Longyearbyen',
    district: 'Arctic',
    tz: '+1',
  },
  {
    city: 'Amsterdam',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Andorra',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Belgrade',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Berlin',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Bratislava',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Brussels',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Budapest',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Busingen',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Copenhagen',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Dublin',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Gibraltar',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Ljubljana',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Luxembourg',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Madrid',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Malta',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Monaco',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Oslo',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Paris',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Podgorica',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Prague',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Rome',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'San Marino',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Sarajevo',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Skopje',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Stockholm',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Tirane',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Vaduz',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Vatican',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Vienna',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Warsaw',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Zagreb',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Zurich',
    district: 'Europe',
    tz: '+1',
  },
  {
    city: 'Blantyre',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Bujumbura',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Cairo',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Gaborone',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Harare',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Johannesburg',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Khartoum',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Kigali',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Lubumbashi',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Lusaka',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Maputo',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Maseru',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Mbabane',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Tripoli',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Windhoek',
    district: 'Africa',
    tz: '+2',
  },
  {
    city: 'Amman',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Beirut',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Damascus',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Famagusta',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Gaza',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Hebron',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Jerusalem',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Nicosia',
    district: 'Asia',
    tz: '+2',
  },
  {
    city: 'Athens',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Bucharest',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Chisinau',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Helsinki',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Kaliningrad',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Kiev',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Mariehamn',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Riga',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Sofia',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Tallinn',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Uzhgorod',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Vilnius',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Zaporozhye',
    district: 'Europe',
    tz: '+2',
  },
  {
    city: 'Addis Ababa',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Asmara',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Dar es Salaam',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Djibouti',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Juba',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Kampala',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Mogadishu',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Nairobi',
    district: 'Africa',
    tz: '+3',
  },
  {
    city: 'Syowa',
    district: 'Antarctica',
    tz: '+3',
  },
  {
    city: 'Aden',
    district: 'Asia',
    tz: '+3',
  },
  {
    city: 'Baghdad',
    district: 'Asia',
    tz: '+3',
  },
  {
    city: 'Bahrain',
    district: 'Asia',
    tz: '+3',
  },
  {
    city: 'Kuwait',
    district: 'Asia',
    tz: '+3',
  },
  {
    city: 'Qatar',
    district: 'Asia',
    tz: '+3',
  },
  {
    city: 'Riyadh',
    district: 'Asia',
    tz: '+3',
  },
  {
    city: 'Istanbul',
    district: 'Europe',
    tz: '+3',
  },
  {
    city: 'Kirov',
    district: 'Europe',
    tz: '+3',
  },
  {
    city: 'Minsk',
    district: 'Europe',
    tz: '+3',
  },
  {
    city: 'Moscow',
    district: 'Europe',
    tz: '+3',
  },
  {
    city: 'Simferopol',
    district: 'Europe',
    tz: '+3',
  },
  {
    city: 'Antananarivo',
    district: 'Indian',
    tz: '+3',
  },
  {
    city: 'Comoro',
    district: 'Indian',
    tz: '+3',
  },
  {
    city: 'Mayotte',
    district: 'Indian',
    tz: '+3',
  },
  {
    city: 'Tehran',
    district: 'Asia',
    tz: '+3:30',
  },
  {
    city: 'Baku',
    district: 'Asia',
    tz: '+4',
  },
  {
    city: 'Dubai',
    district: 'Asia',
    tz: '+4',
  },
  {
    city: 'Muscat',
    district: 'Asia',
    tz: '+4',
  },
  {
    city: 'Tbilisi',
    district: 'Asia',
    tz: '+4',
  },
  {
    city: 'Yerevan',
    district: 'Asia',
    tz: '+4',
  },
  {
    city: 'Astrakhan',
    district: 'Europe',
    tz: '+4',
  },
  {
    city: 'Samara',
    district: 'Europe',
    tz: '+4',
  },
  {
    city: 'Saratov',
    district: 'Europe',
    tz: '+4',
  },
  {
    city: 'Ulyanovsk',
    district: 'Europe',
    tz: '+4',
  },
  {
    city: 'Volgograd',
    district: 'Europe',
    tz: '+4',
  },
  {
    city: 'Mahe',
    district: 'Indian',
    tz: '+4',
  },
  {
    city: 'Mauritius',
    district: 'Indian',
    tz: '+4',
  },
  {
    city: 'Reunion',
    district: 'Indian',
    tz: '+4',
  },
  {
    city: 'Kabul',
    district: 'Asia',
    tz: '+4:30',
  },
  {
    city: 'Mawson',
    district: 'Antarctica',
    tz: '+5',
  },
  {
    city: 'Aqtau',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Aqtobe',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Ashgabat',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Atyrau',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Dushanbe',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Karachi',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Oral',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Qyzylorda',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Samarkand',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Tashkent',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Yekaterinburg',
    district: 'Asia',
    tz: '+5',
  },
  {
    city: 'Kerguelen',
    district: 'Indian',
    tz: '+5',
  },
  {
    city: 'Maldives',
    district: 'Indian',
    tz: '+5',
  },
  {
    city: 'Colombo',
    district: 'Asia',
    tz: '+5:30',
  },
  {
    city: 'Kolkata',
    district: 'Asia',
    tz: '+5:30',
  },
  {
    city: 'Kathmandu',
    district: 'Asia',
    tz: '+5:45',
  },
  {
    city: 'Vostok',
    district: 'Antarctica',
    tz: '+6',
  },
  {
    city: 'Almaty',
    district: 'Asia',
    tz: '+6',
  },
  {
    city: 'Bishkek',
    district: 'Asia',
    tz: '+6',
  },
  {
    city: 'Dhaka',
    district: 'Asia',
    tz: '+6',
  },
  {
    city: 'Omsk',
    district: 'Asia',
    tz: '+6',
  },
  {
    city: 'Qostanay',
    district: 'Asia',
    tz: '+6',
  },
  {
    city: 'Thimphu',
    district: 'Asia',
    tz: '+6',
  },
  {
    city: 'Urumqi',
    district: 'Asia',
    tz: '+6',
  },
  {
    city: 'Chagos',
    district: 'Indian',
    tz: '+6',
  },
  {
    city: 'Yangon',
    district: 'Asia',
    tz: '+6:30',
  },
  {
    city: 'Cocos',
    district: 'Indian',
    tz: '+6:30',
  },
  {
    city: 'Davis',
    district: 'Antarctica',
    tz: '+7',
  },
  {
    city: 'Bangkok',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Barnaul',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Hovd',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Ho Chi Minh',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Jakarta',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Krasnoyarsk',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Novokuznetsk',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Novosibirsk',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Phnom Penh',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Pontianak',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Tomsk',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Vientiane',
    district: 'Asia',
    tz: '+7',
  },
  {
    city: 'Christmas',
    district: 'Indian',
    tz: '+7',
  },
  {
    city: 'Casey',
    district: 'Antarctica',
    tz: '+8',
  },
  {
    city: 'Brunei',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Choibalsan',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Hong Kong',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Irkutsk',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Kuala Lumpur',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Kuching',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Macau',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Makassar',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Manila',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Shanghai',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Singapore',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Taipei',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Ulaanbaatar',
    district: 'Asia',
    tz: '+8',
  },
  {
    city: 'Perth',
    district: 'Australia',
    tz: '+8',
  },
  {
    city: 'Eucla',
    district: 'Australia',
    tz: '+8:45',
  },
  {
    city: 'Chita',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Dili',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Jayapura',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Khandyga',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Pyongyang',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Seoul',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Tokyo',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Yakutsk',
    district: 'Asia',
    tz: '+9',
  },
  {
    city: 'Palau',
    district: 'Pacific',
    tz: '+9',
  },
  {
    city: 'Adelaide',
    district: 'Australia',
    tz: '+9:30',
  },
  {
    city: 'Broken Hill',
    district: 'Australia',
    tz: '+9:30',
  },
  {
    city: 'Darwin',
    district: 'Australia',
    tz: '+9:30',
  },
  {
    city: 'DumontDUrville',
    district: 'Antarctica',
    tz: '+10',
  },
  {
    city: 'Ust-Nera',
    district: 'Asia',
    tz: '+10',
  },
  {
    city: 'Vladivostok',
    district: 'Asia',
    tz: '+10',
  },
  {
    city: 'Brisbane',
    district: 'Australia',
    tz: '+10',
  },
  {
    city: 'Currie',
    district: 'Australia',
    tz: '+10',
  },
  {
    city: 'Hobart',
    district: 'Australia',
    tz: '+10',
  },
  {
    city: 'Lindeman',
    district: 'Australia',
    tz: '+10',
  },
  {
    city: 'Melbourne',
    district: 'Australia',
    tz: '+10',
  },
  {
    city: 'Sydney',
    district: 'Australia',
    tz: '+10',
  },
  {
    city: 'Chuuk',
    district: 'Pacific',
    tz: '+10',
  },
  {
    city: 'Guam',
    district: 'Pacific',
    tz: '+10',
  },
  {
    city: 'Port Moresby',
    district: 'Pacific',
    tz: '+10',
  },
  {
    city: 'Saipan',
    district: 'Pacific',
    tz: '+10',
  },
  {
    city: 'Lord Howe',
    district: 'Australia',
    tz: '+10:30',
  },
  {
    city: 'Macquarie',
    district: 'Antarctica',
    tz: '+11',
  },
  {
    city: 'Magadan',
    district: 'Asia',
    tz: '+11',
  },
  {
    city: 'Sakhalin',
    district: 'Asia',
    tz: '+11',
  },
  {
    city: 'Srednekolymsk',
    district: 'Asia',
    tz: '+11',
  },
  {
    city: 'Bougainville',
    district: 'Pacific',
    tz: '+11',
  },
  {
    city: 'Efate',
    district: 'Pacific',
    tz: '+11',
  },
  {
    city: 'Guadalcanal',
    district: 'Pacific',
    tz: '+11',
  },
  {
    city: 'Kosrae',
    district: 'Pacific',
    tz: '+11',
  },
  {
    city: 'Norfolk',
    district: 'Pacific',
    tz: '+11',
  },
  {
    city: 'Noumea',
    district: 'Pacific',
    tz: '+11',
  },
  {
    city: 'Pohnpei',
    district: 'Pacific',
    tz: '+11',
  },
  {
    city: 'McMurdo',
    district: 'Antarctica',
    tz: '+12',
  },
  {
    city: 'Anadyr',
    district: 'Asia',
    tz: '+12',
  },
  {
    city: 'Kamchatka',
    district: 'Asia',
    tz: '+12',
  },
  {
    city: 'Auckland',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Fiji',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Funafuti',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Kwajalein',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Majuro',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Nauru',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Tarawa',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Wake',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Wallis',
    district: 'Pacific',
    tz: '+12',
  },
  {
    city: 'Chatham',
    district: 'Pacific',
    tz: '+12:45',
  },
  {
    city: 'Apia',
    district: 'Pacific',
    tz: '+13',
  },
  {
    city: 'Enderbury',
    district: 'Pacific',
    tz: '+13',
  },
  {
    city: 'Fakaofo',
    district: 'Pacific',
    tz: '+13',
  },
  {
    city: 'Tongatapu',
    district: 'Pacific',
    tz: '+13',
  },
  {
    city: 'Kiritimati',
    district: 'Pacific',
    tz: '+14',
  },
].map((item) => ({
  districtCity: `${item.district}/${item.city}`,
  utcOffset: utcOffset(item.tz),
  ...item,
}));
