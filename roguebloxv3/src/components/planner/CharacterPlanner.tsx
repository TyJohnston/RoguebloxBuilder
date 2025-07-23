import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StarRating } from "./StarRating";
import { useToast } from "@/hooks/use-toast";
import { 
  races, 
  subraces, 
  gifts, 
  shrines, 
  baseClasses, 
  superClasses, 
  ultraClasses,
  weapons,
  enchants,
  reforges,
  relics,
  armor
} from "@/data/gameData";

export const CharacterPlanner = () => {
  const [buildName, setBuildName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedSubrace, setSelectedSubrace] = useState("");
  const [selectedGift, setSelectedGift] = useState("");
  const [selectedShrine, setSelectedShrine] = useState("");
  const [demonHeart, setDemonHeart] = useState(false);
  const [mainBase, setMainBase] = useState("");
  const [superClass, setSuperClass] = useState("");
  const [ultraClass, setUltraClass] = useState("");
  const [secondaryBase, setSecondaryBase] = useState("");
  const [weapon, setWeapon] = useState("");
  const [weaponEnchant, setWeaponEnchant] = useState("");
  const [weaponReforge, setWeaponReforge] = useState("");
  const [headArmor, setHeadArmor] = useState("");
  const [headReforge, setHeadReforge] = useState("");
  const [chestArmor, setChestArmor] = useState("");
  const [chestReforge, setChestReforge] = useState("");
  const [legsArmor, setLegsArmor] = useState("");
  const [legsReforge, setLegsReforge] = useState("");
  const [relic1, setRelic1] = useState("");
  const [relic2, setRelic2] = useState("");
  const [relic3, setRelic3] = useState("");
  const { toast } = useToast();

  const handleSave = () => {
    if (!buildName.trim()) {
      toast({
        title: "Build name required",
        description: "Please enter a name for your build.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Build saved!",
      description: `"${buildName}" has been saved to your collection.`,
    });
  };

  const calculateRelicStars = () => {
    const selectedRelics = [relic1, relic2, relic3].filter(r => r && r !== "none");
    let totalStars = selectedRelics.reduce((sum, relicValue) => {
      const relic = relics.find(r => r.value === relicValue);
      return sum + (relic?.stars || 0);
    }, 0);
    
    if (demonHeart) totalStars += 1;
    return { used: totalStars, max: 4 };
  };

  const relicStars = calculateRelicStars();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Character Planner
        </h1>
        <p className="text-muted-foreground">Create and optimize your Rogueblox character build</p>
      </div>

      {/* Build Info */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-gaming-purple">Build Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="buildName" className="text-foreground font-medium">Build Name</Label>
            <Input
              id="buildName"
              placeholder="Enter build name..."
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
              className="bg-muted border-border focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-foreground font-medium">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your build strategy..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-muted border-border focus:border-primary min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Character Information */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-gaming-blue">Character Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-foreground font-medium">Race</Label>
            <Select value={selectedRace} onValueChange={setSelectedRace}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select race" />
              </SelectTrigger>
              <SelectContent>
                {races.map(race => (
                  <SelectItem key={race.value} value={race.value}>
                    <div className="flex items-center gap-2">
                      <span>{race.label}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        race.rarity === 'legendary' ? 'bg-gaming-gold/20 text-gaming-gold' :
                        race.rarity === 'rare' ? 'bg-gaming-purple/20 text-gaming-purple' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {race.rarity}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-foreground font-medium">Subrace</Label>
            <Select value={selectedSubrace} onValueChange={setSelectedSubrace}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select subrace" />
              </SelectTrigger>
              <SelectContent>
                {subraces.map(subrace => (
                  <SelectItem key={subrace.value} value={subrace.value}>
                    {subrace.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-foreground font-medium">Gift</Label>
            <Select value={selectedGift} onValueChange={setSelectedGift}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select gift" />
              </SelectTrigger>
              <SelectContent>
                {gifts.map(gift => (
                  <SelectItem key={gift.value} value={gift.value}>
                    <div>
                      <div>{gift.label}</div>
                      {gift.description && (
                        <div className="text-xs text-muted-foreground">{gift.description}</div>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-foreground font-medium">Shrine</Label>
            <Select value={selectedShrine} onValueChange={setSelectedShrine}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select shrine" />
              </SelectTrigger>
              <SelectContent>
                {shrines.map(shrine => (
                  <SelectItem key={shrine.value} value={shrine.value}>
                    <div>
                      <div>{shrine.label}</div>
                      {shrine.description && (
                        <div className="text-xs text-muted-foreground">{shrine.description}</div>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <Checkbox 
              id="demonHeart" 
              checked={demonHeart}
              onCheckedChange={(checked) => setDemonHeart(checked === true)}
              className="border-border"
            />
            <Label htmlFor="demonHeart" className="text-foreground font-medium">
              Demon Heart (+1 Relic Star, -25% HP Regen)
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Class Selection */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-gaming-red">ULTRA</span>
            <span className="text-gaming-purple">HYBRID</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label className="text-foreground font-medium">Main Base</Label>
            <Select value={mainBase} onValueChange={setMainBase}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select base" />
              </SelectTrigger>
              <SelectContent>
                {baseClasses.map(cls => (
                  <SelectItem key={cls.value} value={cls.value}>
                    <div>
                      <div>{cls.label}</div>
                      {cls.description && (
                        <div className="text-xs text-muted-foreground">{cls.description}</div>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-foreground font-medium">Super</Label>
            <Select value={superClass} onValueChange={setSuperClass}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select super" />
              </SelectTrigger>
              <SelectContent>
                {superClasses.map(cls => (
                  <SelectItem key={cls.value} value={cls.value}>
                    <div>
                      <div>{cls.label}</div>
                      {cls.description && (
                        <div className="text-xs text-muted-foreground">{cls.description}</div>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-foreground font-medium">Ultra</Label>
            <Select value={ultraClass} onValueChange={setUltraClass}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select ultra" />
              </SelectTrigger>
              <SelectContent>
                {ultraClasses.map(cls => (
                  <SelectItem key={cls.value} value={cls.value}>
                    <div>
                      <div>{cls.label}</div>
                      {cls.description && (
                        <div className="text-xs text-muted-foreground">{cls.description}</div>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-foreground font-medium">Secondary Base</Label>
            <Select value={secondaryBase} onValueChange={setSecondaryBase}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select secondary" />
              </SelectTrigger>
              <SelectContent>
                {baseClasses.map(cls => (
                  <SelectItem key={cls.value} value={cls.value}>
                    {cls.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Equipment */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-gaming-green">Equipment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Weapon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-foreground font-medium">Weapon</Label>
              <Select value={weapon} onValueChange={setWeapon}>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Select weapon" />
                </SelectTrigger>
                <SelectContent>
                  {weapons.map(wpn => (
                    <SelectItem key={wpn.value} value={wpn.value}>
                      <div>
                        <div>{wpn.label}</div>
                        {wpn.damage && (
                          <div className="text-xs text-muted-foreground">
                            {wpn.type} • {wpn.damage} damage
                          </div>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-foreground font-medium">Enchant</Label>
              <Select value={weaponEnchant} onValueChange={setWeaponEnchant}>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Select enchant" />
                </SelectTrigger>
                <SelectContent>
                  {enchants.map(enchant => (
                    <SelectItem key={enchant.value} value={enchant.value}>
                      <div>
                        <div>{enchant.label}</div>
                        {enchant.description && (
                          <div className="text-xs text-muted-foreground">{enchant.description}</div>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-foreground font-medium">Reforge</Label>
              <Select value={weaponReforge} onValueChange={setWeaponReforge}>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Select reforge" />
                </SelectTrigger>
                <SelectContent>
                  {reforges.map(reforge => (
                    <SelectItem key={reforge.value} value={reforge.value}>
                      <div>
                        <div>{reforge.label}</div>
                        {reforge.description && (
                          <div className="text-xs text-muted-foreground">{reforge.description}</div>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Armor pieces */}
          <div className="space-y-4">
            {[
              { label: "Head", value: headArmor, setValue: setHeadArmor, reforge: headReforge, setReforge: setHeadReforge, slot: "head" },
              { label: "Chest", value: chestArmor, setValue: setChestArmor, reforge: chestReforge, setReforge: setChestReforge, slot: "chest" },
              { label: "Legs", value: legsArmor, setValue: setLegsArmor, reforge: legsReforge, setReforge: setLegsReforge, slot: "legs" }
            ].map((armorSlot) => (
              <div key={armorSlot.label} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-foreground font-medium">{armorSlot.label}</Label>
                  <Select value={armorSlot.value} onValueChange={armorSlot.setValue}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder={`Select ${armorSlot.label.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {armor.filter(a => a.slot === armorSlot.slot).map(armorPiece => (
                        <SelectItem key={armorPiece.value} value={armorPiece.value}>
                          <div>
                            <div>{armorPiece.label}</div>
                            {armorPiece.stats && (
                              <div className="text-xs text-muted-foreground">{armorPiece.stats}</div>
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-foreground font-medium">Reforge</Label>
                  <Select value={armorSlot.reforge} onValueChange={armorSlot.setReforge}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select reforge" />
                    </SelectTrigger>
                    <SelectContent>
                      {reforges.filter(r => r.value === "none" || r.description.includes("Health") || r.description.includes("ARM")).map(reforge => (
                        <SelectItem key={reforge.value} value={reforge.value}>
                          <div>
                            <div>{reforge.label}</div>
                            {reforge.description && (
                              <div className="text-xs text-muted-foreground">{reforge.description}</div>
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Relics */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-gaming-gold">Relics</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Stars:</span>
              <span className={`font-bold ${relicStars.used > relicStars.max ? 'text-gaming-red' : 'text-gaming-gold'}`}>
                {relicStars.used}/{relicStars.max}
              </span>
              <StarRating stars={Math.min(relicStars.used, relicStars.max)} maxStars={relicStars.max} />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Relic 1", value: relic1, setValue: setRelic1 },
            { label: "Relic 2", value: relic2, setValue: setRelic2 },
            { label: "Relic 3", value: relic3, setValue: setRelic3 }
          ].map((relic) => (
            <div key={relic.label}>
              <Label className="text-foreground font-medium">{relic.label}</Label>
              <Select value={relic.value} onValueChange={relic.setValue}>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder={`Select ${relic.label.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                  {relics.map(r => (
                    <SelectItem key={r.value} value={r.value}>
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div>{r.label}</div>
                          {r.description && (
                            <div className="text-xs text-muted-foreground">{r.description}</div>
                          )}
                        </div>
                        {r.stars > 0 && (
                          <StarRating stars={r.stars} maxStars={5} size="sm" showEmpty={false} />
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-center">
        <Button 
          onClick={handleSave}
          className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 shadow-button hover:opacity-90"
        >
          Save Build
        </Button>
      </div>
    </div>
  );
};