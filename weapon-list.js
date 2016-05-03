/* Weapons - 
 *
 * TODO:
 *   # Short Term:
 *     # Add functionality
 *   
 *   # Long Term:
 *	   # Make it so giveWeapon(arg, arg); will accept a user id's and weapon id's
 *
 * Harry F. 14 Apr 2016
 **/


var weapons = [
// bare hands
    {
      weapon_id: 00,
      search_name: "fists",
      name: "Fists",
      type: "melee",
      ammo: false,
      clip: false,
      rounds: false,
      attachment: false
    },
// handguns, each gets 150 rounds, altogether.
    {
      weapon_id: 01,
      search_name: "glock",
      name: "Glock 19",
      type: "handgun",
      ammo: "9×19mm Parabellum",
      clip: 15,
      rounds: 135,
      attachment: "laser light"
    },
    {
      weapon_id: 02,
      search_name: "deagle",
      name: "Desert Eagle",
      type: "handgun",
      ammo: ".50 cal Action Express",
      clip: 7,
      rounds: 143,
      attachment: "wrist watch" // because, what else would you need?
    },
// assault rifles get 300 rounds altogether, shotguns 200, sniper rifles 250
    {
      weapon_id: 03,
      search_name: "ak47",
      name: "AK-47",
      type: "Assault Rifle",
      ammo: "7.62×39mm",
      clip: 48,
      rounds: 252,
      attachment: "flamethrower"
    },
    {
    	weapon_id: 04,
      search_name: "m16",
      name: "M16",
      type: "Assault Rifle",
      ammo: "5.56×45mm",
      clip: 20,
      rounds: 280,
      attachment: "foregrip"
    },
    {
    	weapon_id: 05,
      search_name: "shotgun",
      name: "Benelli M4",
      type: "shotgun",
      ammo: "12 gauge slug",
      clip: 7,
      rounds: 193,
      attachment: "flashlight"
    },
    {
    	weapon_id: 06,
      search_name: "sniper",
      name: "M40A5",
      type: "sniper rifle",
      ammo: "7.62×51mm NATO",
      clip: "10",
      rounds: "240",
      attachment: "8x scope"
    },
// throwables
    {
    	weapon_id: 07,
      search_name: "frag",
      name: "Frag Grenade",
      type: "explosive",
      clip: 1,
      rounds: 15,
      attachment: false
    },
    {
    	weapon_id: 08,
      search_name: "molotov",
      name: "Molotov Cocktail",
      type: "explosive",
      clip: 1,
      rounds: 15,
      attachment: false
    },
    {
    	weapon_id: 09,
      search_name: "lamp",
      name: "Desk Lamp",
      type: "appliance",
      clip: 1,
      rounds: 36,
      attachment: "extenstion cord"
    },
    {
    	weapon_id: 10,
      search_name: "cat",
      name: "House Cat",
      type: "animal",
      clip: 2,
      rounds: 1998,
      attachment: "razor claws"
    },
// melee 
    {
    	weapon_id: 11,
      search_name: "knife",
      name: "Combat Knife",
      type: "personal defense",
      clip: 1,
      rounds: 0,
      attachment: false
    },
    {
    	weapon_id: 12,
      search_name: "pipe",
      name: "Lead Pipe",
      type: "personal defense",
      clip: 1,
      rounds: 0,
      attachment: false
    },
    {
    	weapon_id: 13,
      search_name: "axe",
      name: "Fire Axe",
      type: "personal defense",
      clip: 1,
      rounds: 0,
      attachment: false
    }
];


function giveWeapon(name, weapon_id) {
	console.log(name + " was given a(n) " + weapon_id + "!");
}

giveWeapon("Harry", weapons[12].name);
