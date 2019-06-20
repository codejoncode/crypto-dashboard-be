const coins = ['42','300','365','404','433','611','808','888','1337','2015','EFL','ELC','EMC2',
'EMD','EXCL','EXE','EZC','FLAP','FC2','FFC',
'FIBRE','FRC','FLT','FRK','FRAC','FST','FTC',
'GDC','GLC','GLD','GLX','GLYPH','GML','GUE',
'HAL','HBN','HUC','HVC','HYP','ICB','IFC',
'IOC','IXC','JBS','JKC','JUDGE','KDC','KEYC',
'KGC','LK7','LKY','LSD','LTB','LTCD','LTCX',
'LXC','LYC','MAX','MEC','MED','MIN','MINT',
'MN','MINC','MRY','MZC','NAN','NAUT','NAV',
'NBL','NET','NMB','NRB','NOBL','NRS','NVC',
'NMC','NYAN','OPAL','ORB','OSC','PHS',
'POINTS','POT','PSEUD','PXC','PYC','RDD',
'RIPO','RPC','RT2','RYC','RZR','SAT2','SBC',
'SDC','SFR','SHADE','SHLD','SILK','SLG','SMC','SOLE','SPA','SPOTS','SRC','SSV','XLM',
'SUPER','SWIFT','SYNC','SYS','TAG','TAK','TES','TGC','TIT','TOR','TRC','TITC','ULTC',
'UNB','UNO','URO','USDE','UTC','UTIL','VDO',
'VIA','VOOT','VRC','VTC','WC','WDC','XAI',
'XBOT','XC','XCSH','XCR','XJO','XLB','XPM',
'XST','XXX','YAC','ZCC','ZED','BCN','EKN',
'XDN','XAU','TMC','XEM','BURST','NBT','SJCX',
'START','HUGE','XCP','MAID','007','NSR',
'MONA','CELL','TEK','BAY','NTRN','SLING',
'XVC','CRAVE','BLOCK','XSI','BYC','GRC',
'GEMZ','KTK','HZ','FAIR','QORA','NLG','RBY',
'PTC','KORE','WBB','SSD','XTC','NOTE','FLO',
'MMXIV','8BIT','STV','EBS','AM','XMG',
'AMBER','NKT','J','GHC','ABY','LDOGE','MTR',
'TRI','SWARM','BBR','BTCRY','BCR','XPB',
'XDQ','FLDC','SLR','SMAC','TRK','U','UIS',
'CYP','UFO','ASN','OC','GSM','FSC','NXTTY','QBK','BLC','MARYJ','OMC','GIG','CC','BITS',
'LTBC','NEOS','HYPER','VTR','METAL','PINK',
'GRE','XG','CHILD','MINE','ROS','UNAT','SLM',
'GAIA','TRUST','FCN','XCN','CURE','GMC',
'MMC','XBC','CYC','OCTO','MSC','EGG','C2',
'GSX','CAMC','RBR','XQN','ICASH','NODE','SOON','BTMI','EVENT','1CR','VIOR','XCO',
'VMC','VIRAL','EQM','ISL','QSLV','XWT','XNA',
'RDN','SKB','BSTY','FCS','GAM','NXS','CESC','TWLV','EAGS','MWC','ADC','MARS','XMS','SPHR','SIGU','M1','DB','CTO','EDGE','BITL','FUTC','GLOBE','TAM','MRP','CREVA','XFC','NANAS','LOG','XCE','ACP','DRZ','BSC','DRKT','CIRC','NKA','VERSA','EPY','SQL','PIGGY','CHA','MIL','CRW','GEN','XPH','GRM','QTZ',
'ARB','LTS','SPC','GP','BITZ','DUB','GRAV',
'BOB','MNV','QCN','HEDGE','SONG','XSEED',
'AXIOM','SMLY','RBT','CHIP','SPEC','UNC',
'SPRTS','ZNY','BTQ','PKB','SNRG','GHOUL',
'HNC','DIGS','EXP','GCR','MAPC','MI','CON','TX','GRS','SC','CLV','LYB','PXI','CPC','AMS','OBITS','CLUB','RADS','EMC','BLITZ','BHIRE','EGC','MND','I0C','BTA','DCR','NAS2','PAK','CRB','DOGED','REP','OK','RVR','AMP',
'HODL','DGD','EDRC','LSK','WAVES','HTC',
'GAME','DSH','DBIC','XHI','BIOS','CAB',
'DIEM','GBT','RCX','PWR','TRUMP','PRM','BCY',
'RBIES','STEEM','BLRY','XWC','DOT','SCOT','CREED','POST','INFX','ETHS','PXL','NUM','SOUL','ION','GROW','UNITY','OLDSF','SSTC','NETC','GPU','TAGR','HMP','ADZ','GAP','MYC','IVZ','VTA','SLS','SOIL','CUBE','YOC','VPRC','APC','STEPS','DBTC','UNIT','AEON','MOIN','SIB','ERC','AIB','PRIME','BERN','BIGUP',
'KR','XRE','MEME','XDB','ANTI','BRK','COLX','MNM','ZEIT','2GIVE','CGA','SWING','SAFEX',
'NEBU','AEC','FRN','ADN','PULSE','N7','CYG','LGBTQ','UTH','MPRO','KATZ','SPM','MOJO','BELA','FLX','BOLI','CLUD','DIME','FLY','HVCO','GIZ','GREXIT','CARBON','DEUR','TUR','LEMON','DISK','NEVA','CYT','FUZZ','NKC',
'SCRT','XRA','XNX','STHR','DBG','BONES',
'WMC','GOTX','FLVR','SHREK','RISE','REV',
'PBC','OBS','EXIT','EDUC','CLINT','CKC','VIP','NXE','ZOOM','DRACO','YOVI','ORLY','KUBOS','INCP','SAK','EVIL','OMA','MUE','COX','BNT','BSD','DES','BIT16','PDC','CMTC',
'CHESS','SPACE','REE','LQD','MARV','XDE2',
'VEC2','OMNI','GSY','TRTK','LIR','MMNXT',
'SCRPT','LBC','SPCIE','SBD','CJ','PUT',
'KRAK','DLISK','IBANK','STRAT','VOYA','ENTER','BM','FRWC','PSY','XT','RUST','NZC',
'SNGLS','XAUR','BFX','UNIQ','CRX','DCT','XPOKE','MUDRA','WARP','CNMT','PIZZA','LC','HEAT','ICN','EXB','WINGS','CDEX','RBIT','DCS.','KMD','GB','NEO','ANC','SYNX','MC','EDC','JWL','WAY','TAB','TRIG','BITCNY','BITUSD','ATMC','STO','SNS','CTC','TOT','BTD','BOTS','MDC','FTP','ZET2','CVNC','KRB','TELL','ENE','TDFB','BLOCKPAY','BXT','ZYD',
'MST','GOON','VLT','ZNE','DCK','COVAL',
'DGDC','TODAY','VRM','ROOT','1ST','GPL',
'DOPE','B3','FX','PIO','PROUD','SMSR','UBIQ','ARM','RING','ERB','LAZ','FONZ','BTCR',
'FCTC','SANDG','PNK','MOOND','DLC','SEN','SCN','WEX','LTH','BRONZ','SH','BUZZ','MG',
'PSI','XPO','NLC','PSB','XBTS','FIT','PINKX',
'FIRE','UNF','SPORT','PPY','NTC','EGO',
'RCOIN','X2','MT','TIA','GBRC','XUP','HALLO',
'BBCC','EMIGR','BHC','CRAFT','INV','OLYMP','DPAY','HKG','ANTC','JOBS','DGORE','THC',
'TRA','RMS','FJC','VAPOR','SDP','RRT','XZC',
'PRE','CALC','LEA','CF','CRNK','CFC','VTY','ARDR','BS','JIF','CRAB','HILL','MONETA',
'EC','RUBIT','HCC','BRAIN','VTX','KRC',
'ROYAL','LFC','ZUR','NUBIS','TENNET','PEC',
'GMX','32BIT','GNJ','TEAM','SCT','LANA',
'ELE','GCC','AND','GBYTE','EQUAL','SWEET',
'2BACCO','DKC','COC','CHOOF','CSH','ZCL',
'RYCN','PCS','NBIT','WINE','DAR','ARK',
'IFLT','ZECD','ZXT','WASH','TESLA','LUCKY',
'VSL','TPG','LEOC','MDT','CBD','PEX',
'INSANE','GNT','PENC','BASH','FAME','LIV',
'SP','MEGA','VRS','ALC','DOGETH','KLC','HUSH','BTLC','DRM8','FIST','EBZ','DRS',
'FGZ','BOSON','ATX','PNC','BRDD','TIME',
'BIPC','XNC','EMB','BTTF','DLR','CSMIC',
'SCASH','XEN','JIO','IW','JNS','TRICK',
'DCRE','FRE','NPC','PLNC','DGMS','ICOB',
'ARCO','KURT','XCRE','ENT','UR','MTLM3','ODNT','EUC','CCX','BCF','SEEDS','XSN','TKS',
'BCCOIN','SHORTY','PCM','KC','CORAL',
'BamitCoin','NXC','MONEY','BSTAR','HSP',
'HZT','CS','XSP','CCRB','BULLS','INCNT','ICON','NIC','ACN','XNG','XCI','LOOK','LOC',
'MMXVI','TRST','MIS','WOP','CQST','IMPS',
'IN','CHIEF','GOAT','ANAL','RC','PND','PX','ECAD','OPTION','AV','LTD','UNITS','HEEL',
'GAKH','GAIN','SHIFT','S8C','LVG','DRA',
'ASAFE2','LTCR','QBC','XPRO','ASTR','GIFT',
'VIDZ','INC','PTA','ACID','ZLQ','RADI','RNC','GOLOS','PASC','TWIST','PAYP','DETH','YAY','YES','LENIN','MRSA','OS76','BOSS','MKR',
'BIC','CRPS','MOTO','NTCC','HXX','SPKTR',
'MAC','SEL','NOO','CHAO','XGB','YMC','JOK',
'GBIT','TEC','BOMB','RIDE','PIVX','KED','CNO','WEALTH','IOP','XSPEC','PEPECASH',
'CLICK','ELS','KUSH','ERY','PLU','PRES',
'BTZ','OPES','WCT','UBQ','RATIO','BAN','NICE','SMF','CWXT','TECH','CIR','LEPEN',
'ROUND','MARI','MARX','TAT','HAZE','PRX',
'NRC','PAC','IMPCH','ERR','TIC','NUKE','EOC','SFC','JANE','PARA','MM','CTL','NDOGE','ZBC',
'MLN','FRST','PAY','ORO','ALEX','TBCX',
'MCAR','THS','ACES','UAEC','EA','PIE','CREA',
'WISC','BVC','FIND','MLITE','STALIN','TSE','VLTC','BIOB','SWT','PASL','ZER','CHAT',
'CDN','NETKO','ZOI','HONEY','MXT','MUSIC',
'DTB','VEG','MBIT','VOLT','EDG','B@','BESTC',
'CHC','ZENI','PLANET','DUCK','BNX','BSTK',
'RNS','DBIX','AMIS','KAYI','XVP','BOAT','TAJ','IMX','CJC','AMY','QBT','EB3','XVE','FAZZ','APT','BLAZR','ARPA','UNI','ECO','XLR','DARK','DON','MER','WGO','RLC','ATMOS','ETT','VISIO','HPC','GOT','CXT','EMPC','GNO','LGD','TAAS','BUCKS','XBY','GUP','MCRN','LUN','RAIN','WSX','IEC','IMS','ARGUS','CNT',
'LMC','TKN','BTCS','PROC','XGR','BENJI',
'HMQ','BCAP','DUO','RBX','GRW','APX','MILO',
'OLV','ILC','MRT','IOU','PZM','PHR','ANT','PUPA','RICE','XCT','DEA','RED','ZSE','CTIC','TAP','BITOK','PBT','MUU','INF8','HTML5','MNE','DICE','SBSC','USC','DUX','XPS','EQT','INSN','BAT','MNTC','F16','HAMS','QTUM','NEF','ZEN','BOS','QWARK','MIOTA','QRL','ADL','PTOY','ZRC','LKK','ESP','DYN','SEQ','MCAP','MYST','VERI','SNM','SKY','CFI','SNT','AVT','CVC','IXT','DENT','ETHOS','STA','TFL',
'EFYT','XTZ','EOS','MCO','NMR','ADX','QAU',
'ECOB','PLBT','USDT','NANO','AHT','ATB',
'TIX','CHAN','CMP','RVT','HRB','NIM','8BT',
'CDT','ACT','DNT','SUR','PING','MIV','DAOC',
'SAN','KIN','WGR','XEL','NVST','FUN','FUNC',
'PQT','WTT','MTL','HVN','MYB','PPT','SNC','STAR','COR','XRL','OROC','OAX','MBI','DDF','DIM','GGS','DNA','FYN','FND','DCY','CFT','DNR','DP','VUC','BTPL','UNIFY','BRIT','AMMO','SOCC','MASS','LA','IML','XUC','STU','PLR','GUNS','IFT','BCAT','PRO','SYC','IND','TRIBE','ZRX','TNT','SRCH','COSS','STORM','NPX','STORJ','SCORE','OMG','OTX','VOISE','ETBS','CVCOIN','ARC','BOG','NDC','POE','ADT','AE','UET','PART','AGRS','SAND','DMT',
'DAS','ADST','XCJ','RKC','NLC2','LINDA','KING','ANCP','RCC','ROOTS','SNK','CABS','OPT','ZNT','BITSD','XLC','SKIN','MSP',
'HIRE','REAL','DFBT','EQ','WLK','VIB',
'ONION','BTX','ICE','XID','GCN','ATOM','MANA','ICOO','TME','SMART','SIGT','ONX','COE','ARENA','WINK','CRM','BCH','DGPT','MOBI','CSNO','KICK','SDAO','STX','BNB','CORE','KEN','QVT','TIE','AUT','CTT','GRWI','MNY','MTH','CCC','UMC','BMXT','GAS','FIL',
'OCL','BNC','TOM','BTM','XAS','SMNX','DCN',
'DLT','MRV','MBRS','SUB','NEBL','PGL','XMCC','AUN','CMPCO','DTCT','CTR','WNET','PRG','THNX','WORM','FUCK','VRD','SIFT','IGNIS',
'IWT','JDC','ITT','AIX','EVX','XEC','ENTRP','ICOS','PIX','MEDI','HGT','LTA','NIMFA','SCOR','MLS','KEX','COB','BRO','MINEX','ATL','DFT','VET','UTK','LAT','SOJ','HDG','STCN','SQP','RIYA','LNK','AMB','WAN','MNTP','ALTOCAR','BLX','BKX','BOU','OXY','TTT','AMT','GIM','NYC','LBTC','FRAZ','EMT','GXC','HBT','KRONE','SRT','AVA','BT','ACC','Z2','LINX','XCXT','BLAS','SCL','TRV','CRTM','EON','PST','MTX','PRIX','CTX','ENJ','CNX',
'DRC','FUEL','ACE','WRC','WTC','BRX','UCASH','WRT','ORME','DEEP','CCT','WSH','ARNA','ABC',
'PRP','BMC','SKRT','3DES','PYN','KAPU','SENSE','CAPP','VEE','FC','RCN','NRN','EVC','LINK','WIZ','EDO','ATKN','KNC','RUSTBITS',
'REX','ETHD','SUMO','TRX','H2O','TKT','RHEA','ART','DRT','SNOV','MTN','STOCKBET','PLM',
'SALT','SND','XP','LRC','HSR','GLA','ZNA',
'EZM','ODN','POLL','MTK','CAS','MAT','GJC',
'WIC','WEB','WAND','ELIX','EBTC','HAC','ADA','YOYOW','REC','BIS','OPP','ROCK2','EARTH','ICX','VSX','FLASH','GRFT','BTCZ','CZC','PPP','GUESS','CAN','ETP','CIX','ERT','FLIK','TRIP','MBT','JVY','ALIS','LEV','ARBI','REQ','ARN','DAT','VIBE','ROK','XRED','DAY','AST',
'FLP','HXT','CND','VRP','NTM','TZC','ENG','MCI','COV','WAX','AIR','NTO','ATCC',
'KOLION','WILD','ELTC2','ILCT','POWR','C20','RYZ','ELM','TER','XCS','BQ','CLOUT','WABI',
'EVR','TOA','MNZ','VIVO','PHX','MDA','ZSC','AURS','CAG','PKT','ECHT','INXT','ATS','RGC','EBET','R','MOD','BITCM','CPAY','RUP','BON*','APPC','WHL','BTG','UP','ETG','WOMEN','MAY','RNDR','EDDIE','SOMA','NAMO','KCS','GAT','BLUE','FLLW','WYR','VZT','INDI','LUX','BAR','PIRL','ECASH','WPR','DRGN','ODMC','BRAT',
'DTR','TKR','KEY','ELITE','XIOS','DOV','ETN',
'REA','AVE','XNN','BTDX','LOAN*','ZAB','BT1','BT2','SHP','JCR','XSB','ATM','EBST','KEK',
'AID','BLHC','ALTCOM','OST','DATA','UGC','PLAY','PURE','CLD','OTN','POS','REBL',
'NEOG','EXN','INS','TRCT','UKG','BTCRED','CPEX','JTX','AXT','RDNN','NEU','RUPX','BDR',
'XIN','TIO','HNCN','MADC','PURA','INN','HST','BCPT','BDL','CMS','XBL','ZEPH','ATFS','GES','NULS','LCASH','CFD','SPHTX','PLC','SRN',
'WSC','DBET','XGOX','NEWB','LIFE','RMC',
'CREDO','MSR','CJT','EVN','BNK','ELLA','BPL','COIN','ROCK','DRXNE','SKR','GRID','XPTX',
'GVT','ETK','ASTRO','GMT','EMPH','SOAR','EXY','ISH','MNX','CRDS','VIU','SCRM','DBR','GFT','STAC','QSP','RIPT','BBT','GBX','CSTL','ICC','JNT','QASH','ALQO','KNGN','TRIA',
'PBL','MAG','STEX','UFR','LOCI','TAU','LAB',
'DEB','FLIXX','FRD','PFR','ECA','LDM','LTG','BCD','STP','SPANK','WISH','AERM','PLX','NIO','ETHB','CDX','FOOD','DEC','VOT','UQC','LEND','SETH','TIO*','ABYSS','XSH','GEA','BCO*','DSR','BDG','ONG','PRL','BTCM','ETBT','ZCG','MUT','AION','DIVX','CNBC','RHOC','XUN','RFL','COFI','ELTCOIN','GRX','NTK','ERO','CMT','RLX','MAN','CWV','ACHN','NRO','SEND','GLT','X8X','COAL','DAXX','BWK','FNTB','XMRG','BTCE','FYP','BOXY','NGC','UTNP','EGAS','DPP','ADB','TGT','XDCE','BMT','BIO','MTRC','BTCL','PCN','PYP','CRED','SBTC','KLKS','AC3','GTO','TNB','CHIPS','HKN','B2B','LOCK','LTHN','SMT','GER','LTCU','MGO','BTCA','HQX','ETF','STAK','BCOIN',
'MEDIB','CCOS','BNTY','BRD','HAT','ELF',
'VLR','CWX','DBC','ZP','POP','CRC','PNX','BAS','UTT','HBC','AMM','XCPO','GET','ERC20','ITC','HTML','GENE','NMS','PHO','XTRA',
'NTWK','SUCR','GNX','NAS','ACCO','BYTHER','REM','TOK','EREAL','CPN','XFT','QLC','BTSE','OMGC','Q2C','BLT','SPF','TDS','ORE','SPK','GOA','FLS','WAGE','GUN','DFS','POLIS','WELL','FLOT','CL','SHND','AUA','DNN','SAGA','GXS','TSL','IRL','BOT','PMA','TROLL','FOR',
'SGR','JET','MDS','LCP','GTC','IETH','TGCC',
'SDRN','INK','KBR','HPB','MONK','MGN','KZC','GNR','LNC','LWF','BRIC','WCG','HIVE','GX',
'LCK','MFG','ETL','TEL','DRG','SPX*','ONL','ZAP','AIDOC','ECC','ET4','LCT','EBC','VESTA','INT','CPY','STN','SFU','PCOIN','BLNM','LUC','EDT','CYDER','SRNT','MLT',
'EKO','UBTC','BTO','DOC','ARCT','IMVR','IDEX','IDH','CBT','ITZ','XBP','EXRN','AGI','BFT','LGO','CRPT','SGL','TNC','FSBT','CFTY','DTA','CV','DTX','MCU','OCN','THETA','MSDT','PRPS','DUBI','BPT','SGN','IOST','TCT','TRAC','MOT','ZIL','HORSE','QUN','QBAO',
'ACCN','SWFTC','SENT','IPL','OPC','SAF','SHA','PYLNT','GRLC','EVE','YEE','REPUX','JOYT','XCD','BTW','AXPR','FOTA','DDD',
'CPCH','SPEND','NPXS','ZPT','CROAT','REF','SXDT','SXUT','LDC','FAIRG','VAL','MXAI','BCDN','STK','MZX','CRYC','SPICE','Q1S','POLY','XTO','RUFF','ELA','TPAY','CXO','WT','HGS','SISA','EBIT','RCT','CUZ','HLC','BETR','GMR','ING','LHC','BLZ','CVNG','CHSB','EQUI',
'MCT','HHEM','CWIS','MBC','GRO','SWM','MDCL','WOBTC','DNO','eFIC','TKY','BANCA','TRTL','BIX','ABT','HBZ','DOR','PRFT','PARETO','DTRC','IQB','NDLC','BEE','MUN','TIG','LYK','NYX','DXT','SAT','CRL','ORI','LYM','USX',
'LGR','BCA','B2X','EXMR','FSN','UETL','NBR','ARY','RAVE','ILT','SCOOBY','DAI','CEFS','BUN','BSR','SKULL','TRDT','XBTY','JC',
'BTCP','SKC','MWAT','JEW','ERIS','KRM','HT','CDY','SSS','CRDNC','BIFI','CADN','BTF',
'IPC','SHOW','STC','NEC','AIT','STQ','ALT','TRF','KB3','FDX','KREDS','EQL','GAI','VULC','CRE','DTC','DADI','MGGT','TOKC','UNRC','BBP','NOX','HYS','LCWP','NAVI','ADI','TEN','VVI','ANK','IVC','HLP','VIN','SHPING','PTR','LCC','VANY','TFD','NBX','BAX','BERRY',
'APCC','FLIP','CLIN','DHT','GOOD','ENK','ALX','REN','DTH','SOC','TDX','LOT','FUNK',
'LEAF','COMP','BITCAR','CLN','ORYX','BASHC','DIGIF','DGM','CBS','TERN','SVD','PROOF','BTCH','redBUX','AUC','LIZ','CIF','NCASH',
'SPD','CMCT','RPUT','FILL','POA','RVN','XNK','XYO','RFR','PROPS','CEDEX','CEL','CRDTS',
'PUSHI','BINS','POKER','AXYS','EVENC','BOLD','EXTN','DIG','ETS','LIPC','HELL','ELP',
'ACAT','RKT','ELI','CO2','INVOX','VLX','ACTN','LTCH','ZUP','HMT','ONT','USCOIN','KIND','BCT','CLO','CRU','ELIC','MOAT','BBI','BEZ','ENTRC','BTCGO','XTROPTIONS','KNW','PGC','BIT','DATX','PKC','SQOIN','TBAR','TAN','CPL','TUBE','AUTO','OMX','TRCK','SNX','TOMO','CHI','MBM','INVC','W3C','DIN','INSTAR','CHP','PSD','J8T','LELE','DROP','VEGA*','AKA','SHIP','IHT','LCS','LALA',
'LEDU','FOXT','ETKN','ROX','ADM','AMBT',
'MEE','BTRM','MANNA','ePRX','HMC','ZIX',
'ELEC','ORGT','LOOM','PAN','BOTC','VIEW','OKOIN','ADK','GRAM','ESS','VIT','SERA','BLN*','AET','CMOS','PGN','BMH','REDN','TLP','GENS','BSX','BBN','TDZ','PAVO','TUSD','LDN','BUBO','USOAMIC','FLUZ','IPSX','MIO','AIC','MITH','BNN','SPND','FNO','PAS','XSG','CVTC','PLMT','FARM','NEXT','RNTB','XCLR','BPX','SWTH','FDZ','VTN','LION','MASP','XTL','UCN','HUR','BRIA','IC','LATX','ROI','ETHPR','MNB',
'ACH','BTL','GOAL','RAC','BEX','HOLD','EZT','SOL','VIC','XCM','NFN','CEEK','WIIX','EOSDAC','MEDIC','BBC','KWH','CTXC','VLD',
'FTX','GSI','BDP','FLM','ALPS','ZEL','BKC',
'BITG','DEV','CHT','GREEN','ABJ','FTW','RAP','ARTE','ANI','PHC','ETHM','UBC','NOKU','SENC','PAT','LIGER','CHFN','EURN','LEU','SWC','ORS','SEM','DARX','BBK','NCT','UWC',
'UUU','XHV','CPX','DOCK','EQC','ADH','ZLA','LIF','EFX','LND','MNRB','FTO','HPAY','SIG',
'CARE','NZL','TBT','XMC','HOLO','OAK','DML','GEM','TIPS','MOS','TBX','PNT','WCOIN','CHARM','PROTON','DERO','DEAL','JUMP','ZCO','KRL','TMT','NEXO','CHX','SS','0XBTC','XMO',
'EDU','PCL','MITX','APH','NBAI','CVT','TUT','BETT','NOAH','PAL','ENU','BFDT','KEP','RUBY','CTKN','YUM','GSC','DESI','FNP','VLUX','MTC','MTKN','SSH','XBI','VRA','TRUE','MRK','FRV','WINS','XES','RTB','FXT',
'HYDROG','DXC','CHBR','OWD','ELLI','AXS','DAN','CSEN','UBT','AMO','LBA','LIVE','GBG','CNN','SHL','ETZ','SKM','SHR','UBEX','IVY',
'KEC','ODE','HOT','AMN','SABR','HWC','BITGOLD','BITSILVER','GIN','OPEN','NLX','LNKC','FACE','MRPH','IOTX','STM','ITL','AITT','ITM','VID','UCT','SNTR','ZMR','XMV',
'NKN','ELY','HER','PAR','SLX','LTCC','RST','XBB','AMX','TFC','REPO','IRC','PLTC','OIO',
'ANGL','ANTS','KNG','CMM','STT','WYS','COG','ZIPT','QKC','OSA','EXC','BEN','EPT','BCIO','BMK','ROC','BZNT','LYL','FT','BMX','PHI',
'PMNT','BNTN','HYT','GOST','GRMD','SSC','LOKI','BKT','NCP','MPT','STAX','MRN','FOPA','CBC','OOT','NBC','SIC','ALG','PAI','EXCC',
'REL','BTCN','HERO','SEELE','EJAC','APIS','UPP','XT3','MGD','VIG','PLURA','SWACH',
'NWCN','EMAR','ICST','XTNC','ROE','LTCP','DKD','LYNX','POSQ','YCE','STOR','ARO','BWS','BTCC','GOLF','MUSE','OCT','XCEL','ECH','XMN','PLUS1','COI','CANDY','AXE','SHARD','GMCN','TRVC','KRX','BITX','SKRB','HFT','OOW','DTEM','TIP','SOUND','HB','TRW','IQN','GIC','BGL','EPIK','ZMN','PNY','SAFE','COU','BID','ATH','ABS','VITAE','XET','0xDIARY','BSPM','TDP','XGS','XUEZ','BIM','Dow','HEX','EMN','PYT','DEI','TPC','OYS','WEBC','VIDT',
'JEX','ILK','RYO','MUSD','MIC','URALS','QWC',
'WAB','BITN','ARE','DAC','EUNO','KAAS','MMO','MVP','DASC','EGT','MET','PGT','MEDX','CET',
'SLST','TGAME','SPN','ZINC','KETAN','KBC','MFT','INSUR','NIX','ZCN','FIN','RPM','DGX','ITA','NOM','XSTC','U42','EGCC','FREC','DCC','AOA','LET','MOTI','PPAI','MIXI','CBRT','MEET','BOE','RTE','CAR','CPT','PCO','XPST','HSC','MCV','SCRL','CONI','XPAT','MBLC','DIW','JOINT','IDXM','CCO','ATMI','TKA','RMT','OLT','GETX','IQ','BWT','LST','EMV','ESZ','TRAK','ZXC','BTRN','XMX','VME','PERU',
'VITE','RNT','BBO','YUP','SNIP','XDNA','SAL','CARD','LIKE','THRT','GTK','SKRP','AVH','SCC','HALO','BSTN','PITCH','NANJ','PAXEX',
'DIT','AZART','CENNZ','RDC','TTU','FREE','AOP','XAP','INTO','AIMS','TSC','SPLB','CMZ','NOBS','HMN','MHP','HMD','JSE','IMGZ','NYN','IAM','URB','CHART','WHEN','SFT','ORBIS','BLKS','ETRNT','ITR','CHE','ZEEW','MEM',
'QUA','RSC','ENTRY','PHTC','WORK','ORC','ZAZA','DNET','IDAP','HEAL','OFCR','SHPT',
'LED','PRLPAY','RBDT','SKYFT','FLEX','STRY','FAN','GBTC','NBOX','BUD','DBCCOIN','K2G','ARR','SPOT','VTUUR','Pakka','ETI','NOIA','LAX','BOO','DREAM','LPC','DYNO','MFX','NOIZ','SPIKE','SGO','RAWG','BDB','MNR','ZNAQ','YBT','OPET','PSK','KVT','COT','WPT',
'ABELE','XEP','ARBT','BILL','ST','WBBC','XDT','WPP','ASTO','SLT','APL','MCB','HDAC',
'CCCX','VRH','AEN','SOLID','VANIG','AIRE','GMA','WMB','MVU','TLNT','GLDR','IMU','TRT',
'CRS','OLM','CST','YON','URT','QCX','CRON','DIP','PROD','REDC','ZCHN','TTV','OICOIN',
'ENQ','EXPR','DTN','IDM','SIDT','ISR','CDPT','CRGO','AXIS','QRP','TIIM','BNR','VRT','ZCC1','KRP','DAG','OLE','OKB','AMLT','HGO','TCOIN','BZ','PRA','VLP','ZIP','BTK','KCASH',
'1WO','ZB','BOUTS','OGSP','EST','MODEX','OGT','PLA','NPER','ATON','EURS','XCG','BOONS','PCH','ECOM','WIT','OPU','MOF','BOX',
'COTI','ETALON','TICS','ZPR','AAC','EXLT','ESTATE','BLV','RRC','MPG','QNTU','IG','FML','TLU','PSM','MON','KAN','AUDC','NMH','KST','DEL','HIT','PBLK','KVNT','MDN','TMTG','SGC','PRT','COSM','GPPT','LNL','VRN','NEX','BRNX','SRCOIN','RFT','ET','MMTM','XGH','FXP','DICEM','PASS','HRO','DGTX','BSCH','TRVR','PESA','CLPX','DAOX','GLN','AUK','PCCM','TOPC','PLAN','EVER','TRAID','TRIO','BNTE','DPY','FUNDZ','MIB','BAAS','LYNK','TBC','GUSD','CCL','HYC','TCX','HLD','DACC','NUSD',
'TCHB','DAX','BEC','VEEN','CIC','MIODIO','MOV','IHF','CNAB','SGP','LTPC','HANA','BTV',
'URP','SHE','IVN','DAV','ZAT','IMT','MHC','ROBET','CRYP','BDT','BTXC','DAPS','ETE',
'NHCT','AZ','SWA','USDCT','IAG','STRS',
'MTCMN','AAA','ZEST','MOAC','HLM','CSP','USDC','ONGAS','NRVE','BIP','XCASH','RMESH',
'HAND','GBXT','ABCC','BASIS','JIB','PMTN',
'SGA','PHM','CUSD','QUANT','KUSD','VEOT','GGR','VEST','MCN','TCH','DEPO','MENLO','TVA','METM','PAX','ARAW','BRAZ','TALAO','IZX','DIVI','HQT','W12','NBAR','HC','KBX','MYDFS','VTHO','BHPC','VTOS','M2O','SLY','UEC','BEAT','MOLK','MSD','SEED','SEAL','GBO','ACM','DFXT','BF','NWP','BCDT','EVOS','DEEX','ANON','LTZ','MTZ','TBL','BXY','KUE','ESN','H3O','BETHER','ETHO','WTL','HIH','ANGEL','P2PS','GXT','AIM','TWISTR','CXA','BITTO','HNY','QEY','UMK','VNX','WMK','OJX',
'CHW','ABBC','CATT','VEX','LQDN','BIOC','FOREX','CPLO','XPX','RIPAX','HETA','NOW',
'ADAB','CIX100','FIH','MINX','MOBU','NVDX',
'COVEX','TAL','ATT','F2K','GTX','B21','LK','QOBI','BVO','VENA','CDRX','CRF','ELES',
'GEON','TZO','WLME','INVX','AWT','ABX','LINKC','BFC','IMPCN','XPT','FORK','NMK','OUT','LPT','BSV','RAINC ','IOV','MYO',
'ORET','SEC','QUIZ','CYRS','UTL','JOYS','DACH','MNVM','PLTX','BTMG','BRIK','XTN','LUMA','BTZN','CLRTY','CGT','NAVIB','ATHK','ARTP','PLEO','GDX','EGDC','ENTT','RWD','AURUM','WRL','CRWD','ENCN','TAURI','EYE','GTR','HXC','OPEX','SKYM','SCIA','TXP','GPS','WTXH','BBG','NZE','EQY','FIELD','SHKG','TENZ','TWC','WUG','CAND','CTW','CRV','XIM',
'NAM','UFT','2TF','BZKY','CARAT','ZILLA',
'TCJ','MAP','DN8','XNT','PPOVR','LX','AWAX','VAR','TKD','VTAG','WBY','BBOS','BFEX','HUS','MENU','APXT','IDORU','WOM','BONA','HLDY','COS','BLACK','HORUS','MEETONE','IOTW','EMPR','MPAY','AGM','MTCN','PTO','AS','OSF','DPT','GREENT','VIDI','SUQA','OPQ','ZYM','RPB','DYNCOIN','MIT','VANM','PSF','LITION','NEW','TITAN','MZG','VIAZ','BTZC','ECR','RF',
'ARMS','STIPS','MPXT','XELS','PGF7T','IDAC ','ZUUM','UCOINT','YDY','FTUM','SPON','DLXV','OCEANT','TECO','GOALS','ETHIX','CDP','TTB','CHK','VLTX','PRPT','OASC','TREE','GDL',
'LNT','FTRC','HBX','LAO','GOVT','TBRS','COGEN','DAILY','SREUR','MAZC','TGTC','NRG','PLNX','IPT','IGTT','SRXIO','GZB','FNX','GGP','IFUM','ATC','DOOH','IOUX','BQTX',
'NVOY','CYBR','LLG','LCR','SNPC','VTM','NRX',
'BCNA','BTSG','BXM','CINX','CCIN','CCI','RDS','GMS','SGAT','SILKT','BITM','TCHN','ICHN','LVX','AENT','MBN','LYFE','REMCO',
'SaTT','CAP','GEMA','SCH','VTEX','SRV','DSLA','SYLO','YMZ','AER','AIBB','META',
'ASQT','AXC','BLKD','CYS','ATTR','CTY','BC','DDL','EZX','COY','FNL','B2G','CSQ','HBE','HV','ICT','TOS','CPROP','MOOLYA','PON','CREV','VAD','IDC','LBR','EMX','XBASE','LEN','KUBO','FABA','LQ8','GC','INFLR','LIB','XPR','PETL','XDMC','PPS','SMILO','BCVB','TREX','VNS','VRF','AUX','LYQD','CBP','SMOKE','EDN','AVALA','NOS','DT1','FTT','STACS','JMC','FOAM','FRED','CNCT','ENGT','VRTY','TEAMT',
'ZND','3XD','FPC','SYNCO','SPY','77G','HIDU','USE','NGIN','KOTO','SUSD','GENX','VTL','SECI','SPRTZ','C25','MVL','LYN','STASH',
'HERB','AQUA','XQR','URX','FTM','HASH','KSYS','MTEL','MTT','MITC','BBTC','UMO','LIT','MUST','ELT','TIOX','XNB','BXC','PIRATE','EXO','ONAM','BIH','KARMA','CJR',
'AGVC','ASGC','MIMI','PXG','ORM','TRET','SET','BEER','AERGO','TIMI','NRP','SNTVT','CEN','GARD','UNX','OWC','WOWX','SRX','THO','TOSS','KMX','SKI','SG','SUNEX','VIDY','XRBT','ALUX','XBOND','BOSE','GRIN','JOY','WETH','GBE','HRBE','MILC','PINMO','POPC','RGT','SCOP','BMG','OXY2','VC','FAIRC','BPN','DYC','DUSK','LN','FTR','RWE','YSH','TASH','TXM','TRAVEL','ACA','AUPC','COSX','DNTX',
'HART','KSS','LIPS','MIBO','BRIX','NZO','PTT','XRK','RMOB','XRF','POD','SUT','WHO',
'ID','VRX Token','WDX','AIOT','AMOS','ESW','XBANK','OX','KRO','CAID','GUAR','LTE','HLX','MEL','NEXXO','QNTR','BTCUS','RAYS','MOL','REME','RENC','TLT','EMOT','USAT','VOL',
'AIRT','VTRD','BTT','GALI','PLAI','BGG','HEDG','WBTC','ERE','BTU','APS','XBX','QNT','FFUEL','NSP','PTNX','SNcoin','TTNT','BWT2',
'OATH','SBA','DXG','EXTP','ZEX','XCZ','CBUK','HIX','TGN','COGS','XRM','CCOIN','APZ','ICHX','IMP','FORCE','BTMX','LTO','QUSD','BTH','PLG','PVP','EMANATE','RAIZER','CP',
'DAYTA','ORV','CWT','AQU','CXG','CHFT','VNTY','MAI','BTR','SSX','KLK','LVN','FFCT','AZU','ARQ','WU','ZUC','FFM','DRF','GTIB',
'CR','VEO','DLA','AFO','BB1','FET','DAGT','GVE','IDT','KUV','ARCX','YACHTCO','BOLTT',
'ENCX','VALID','TYM','VENUS','HYGH','ALCE','NODIS','MNC','USDS','HVE','XR','VALOR','ALP','EMU','GST','ARS','NRM','APOD','AX','CWEX','CLDX','ECTE','LABX','GGC','AGT','ENV','ANKR','GEP','IZA','GBA','ITU','FANZ','CSPN','CCH','HAVEN','XOV','eQUAD','CUR','CREDIT','ERA','MAKE','KIBIS','SPKZ','VOGOV',
'AWC','DIS','SCRIBE','INX','SQR','GNC','WVR','PHT','WHN','CRO','LYTX','TJA','InBit','DIO',
'LIC','SCA','XOS','VSYS','LAC','QCP','UGT','BWL','ZEON','WATT','XRX','PARQ','T4M','TFF',
'ANY','ELOC','IZZY','SONT','SWI','LUNES','EDEXA','CELR','PPI','ANTE','TRXDICE','AFTT','TRXWIN','IGG','MIG','BWN','IPUX','PCC','MBTX','CFun','SLC','AAS','2GT','VOLLAR','DXN','BUY','LWA','AFCT','REDi','INR','WHY','URIS','ADUX','HRD','BINC','QCO','SHER','ZEROB','ISG','GEC','TAGZ','SKP','MCC','XGN','YPTO','UBE','ETGP','GFCS','RDT','IX','ALIC','HCXP','AGRO','TFUEL','BYTS','GRT','EUCX','MYTV','AML','B66','LEVL','DHC','UGAS','PNP',
'PRY','MXM','TTC','BCNX','SWG','EVED','HTER','GSE','BZRX','YBK','GIF','2KEY','STG','DEVX','TMB','HBRS','XPL','MTSH','DAGO','EMI',
'TEMPO','PPR','REW','ORBS','STE','TPLAY','TELE','GYM','UDOO','FAT','KICKS','SPORTG',
'CRES','AES','AIBK','NCC','STONE','OILD','VLM','LOL','RFOX','CTLX','CSM','BTNY','LOTES','LOTEU','RVO','GTH','IRYO','KBT','USDX','LHT','DASHP','NYCREC','HPT','NSD','SOLVE','BOLT','BLOC','SPT','FBB','TCST','BSAFE','DBTN','WBX','HET','DARC','CMA','MAPR','THR','MATIC','BDLR','PBET','SST','PUX','YANU','XCB','RSF','WMD','TT','TOYKEN',
'XAL','TAS','UNTD','COVA','LAMB','FXC','GEX','DREP','VDL','TMN','TCR','FUNX','ASST','BEET','IFX','MART','TC','DAPPT','TTN',
'GNTO','OCEAN','LMXC','UTPL','GDR','LNX','ORIGIN','NEUTRO','TXT','ARRR','SCONE','MAR',
'OWN','VLS','AWR','QQQ','ULED','UVU','KOZ',
'SMAT','IOWN','QBIT','BCX','LEO','BST','AYA','BUSD','VCN','BAC','BLAST','PRDX','ZOPT','FILM','LUT','VDX','PHB','RSR','ONE','CKUSD','CTPT','ESBC','GRAYLL','BRC','MOC','SERV','PTON','DPN','VBK','THEMIS','YCC','USDK',
'MIX','PLY','CHR','BWX','VST','BORA','WIB','BOXX','UT','BU','DX','MTV','TRY','WIN','VNT','OGO','DVT','BOMBT','CARRY','BRYLL',
'WXT','BOXT','KAT','SPENDC','BEST','CAM','HYDRO','BTN','ATP','BCV','FLC','INB','WICC','EKT','BIHU','1SG','TOP','KT','INE','STPT',
'ARTF','AT','CVNT','DEX','ELD','UND','PEOS','BHD','GTN','VIPS','BBGC','LINA','INFC','BTNT','WGP','NPXSXEM','YOU','BTC','ETH',
'LTC','DASH','XMR','NXT','ETC','DOGE','ZEC',
'BTS','DGB','XRP','BTCD','PPC','CRAIG','XBS','XPY','PRC','YBC','DANK','GIVE','KOBO','DT','CETI','SUP','XPD','GEO','CHASH','SPR','NXTI','WOLF','XDP','AC','ACOIN','AERO','ALF','AGS','AMC','ALN','APEX','ARCH','ARG','ARI','AUR','AXR','BET','BEAN','BLU','BLK',
'BOST','BQC','XMY','MOON','ZET','SXC','QTL','ENRG','QRK','RIC','DGC','LIMX','BTB','CAIX',
'BTMK','BUK','CACH','CANN','CASH','CAT','CBX','CCN','CIN','CINNI','CXC','CLAM',
'CLOAK','CLR','CMC','CNC','CNL','COMM','COOL','CRACK','CRYPT','CSC','DEM','DMD','XVG','DRKC','DSB','DVC','EAC','USCC','ANDC',
'WRLGC','WGC','BLTG','GAMB','FCT','GMB','MARSC','MRS','PHORE','FUNDP','FUND','BEAM',
'FIII','UOS','RBTC','OCX','GO','OCC','RIF','NNB','FRECNX','USDQ','ULT','WWB','OMI','VANT','SNET','BCI','DRPU','DRP','IRIS',
'MBTC','BTCB','IONC','SSP','CNUS','ABL','SDA','SMARTUP','HYN','UIP','MIR','JCT','FTI','DOS','BKN','XSC']

const coinSeeds = []; 

for (let coin of coins){
  coinSeeds.push( {coin} )
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("coins")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coins").insert(coinSeeds);
    });
};
