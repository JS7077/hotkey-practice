export const KEYS = {
    A:'A',B:'B',C:'C',D:'D',E:'E',F:'F',G:'G',H:'H',I:'I',J:'J',K:'K',L:'L',M:'M',N:'N',O:'O',P:'P',Q:'Q',R:'R',S:'S',T:'T',U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'Z',
    ONE:'1',TWO:'2',THREE:'3',FOUR:'4',FIVE:'5',SIX:'6',SEVEN:'7',EIGHT:'8',NINE:'9',ZERO:'0',
    TICK:'`',MINUS:'-',EQUALS:'=',LBRACE:'[',RBRACE:']',BACKSLASH:'\\',SEMICOLON:';',APOSTROPHE:'\'',COMMA:',',PERIOD:'.',SLASH:'/',
    F1:'F1',F2:'F2',F3:'F3',F4:'F4',F5:'F5',F6:'F6',F7:'F7',F8:'F8',F9:'F9',F10:'F10',F11:'F11',F12:'F12',
    ESC:'ESC',TAB:'TAB',CAPS:'CAPS',LSHIFT:'LSHIFT',SPACE:'SPACE',LEFT:'LEFT',UP:'UP',RIGHT:'RIGHT',DOWN:'DOWN',RSHIFT:'RSHIFT',ENTER:'ENTER',DELETE:'DELETE',
} as const
export type KEY = typeof KEYS[keyof typeof KEYS]