export type ProjectDetails ={
  projectName: string,
  projectURL: string,
  projectOverview: string,
  techUsed: Array<string>,

  projectInspriation?: string,
  projectChallenges?: Array<string>,
  currentProgress? :string,

}

export const projects:Array<ProjectDetails> = [
    {
      projectName:"AES-GCM ",
      projectURL: "aes_gcm",
      projectOverview: `A bare bones implementation of AES-GCM in Rust. For this project I used only the standard 
        library in rust.`,
      techUsed: ['rust'],
      projectInspriation:`For this project i was inspired by a subject I had to do for university class about 
      cybersecurity in which we explored at the effects of unsecure (unencrypted) communication. This was the first time 
      I had come into contact with the world of cryptology. The curiosity of how it all worked made me look through python's
      cryptographic library, which when i looked at it, made very little sense because it had a lot of abstraction to get to the 
      underlying encrypt decrypt functions; frustrated with the amount of searching i had to do with the python 
      implementation i decided to go to the source, NIST, where I followed the specification for AES-GCM (AES Galois Counter
      mode); eventually arriving at a working AES-GCM implementation. 
      `,
      projectChallenges:[
        `The largest challenge by far was the programming language. This was the first time I was using Rust for something
        as complex as this, before the AES implementation i was merely experementing with small scripts to understand how
        everything worked. Working with Rust was initially quite hard as i fought with the compiler in regards to memory 
        which is a commonly known hurdle for beginners of Rust. After a while I got adept enough to know where to use a 
        reference, where to use a mutable reference and where to consume values.`,

        `anther challenge was the galois field multiplication used in both the AES part and the GCM part. 
        It was especially hard because this was the first time i had encountered the idea; regardless, i watched 
        tutorials and lectures about the field gaining a better understanding, eventually overcoming the difficulties`,
        
        `Another challenging part was the bitwise manipulation, I had never used concepts like left shift, right shift 
        and XOR in practice so going into AES was an eye opener into the ways these core concepts are used in real life.`,
      ],
      currentProgress:`My AES implementation is fully working, but I have yet to test multiple test vectors for multiple 
      different key sizes and input parameters. The project CAN be used for real world applications but it is better to 
      leave real world applications to the cryptographic libraries provided by most languages as the implementation that has
      been built is purely for educational purposes and without any optimisations. Often using more verbose code to 
      demonstrate what the underlying function is doing rather than being computationally optimal.`
    },
    {
      projectName: "Password Manager",
      projectURL: "password_manager",
      projectOverview: `A minimalist cross-platform desktop application built to serve my needs for a secure offline 
        password manager. Taking inspiration from KeePass I set out to create a password manager which would be simple to 
        use, with help along the way.`,
      techUsed: ['electron','nextjs', 'typescript','tailwind'],
      projectInspriation:`
        For this project I wanted to make a secure password manager much like Keepass, which is accessible on all platforms.
        Having recently completed a course in full stack development I thought I'd use a framework that closely works with
        javascript. Upon learning that Discord and Visual Studio code use a javascript framework called Electron I 
        started making the password manager in Electron, later switching it out for Nextron. Nextron bundles next js with
        electron to use Next js instead of plain html js and css.
      `,
      projectChallenges:[
        `Electron (and nextron by extension) uses IPC channels to communicate between the main process (a node process) and 
        the renderer process (the frontend GUI that the user can see). This project was the first time I had heard of the 
        concept.
        `,
        ` Another challenge was searching key terms of a entry such as a username or an entry title. If the entry is fully encrypted
        using per-entry data encryption keys (DEKs) as is recommended then there is no way to actually search for either fields, as the mode of encryption
        that i am using (AES-GCM)  uses randomised initalisation vectors which will ensure that no two plaintext and key pairs will result in the same 
        ciphertext. To solve this, I utilised a method which is used by password managers like KeePass and Bitwarden which is to encrypt only the 
        sensitive fields and to encrypt the rest of the data at a vault level.
        `,
        `
          Performance is a key metric for all software created, no user wants to wait too long or have an app that is unresponsive. Unfortunately, 
          encryption what could become quite a large file will take time. Given that I am using the browser side to encrypt and decrypt this leaves me
          to have a disadvantage where i cannot utilse the multi-threading ability of AES-GCM. Given the constraints, I've opted to encrypt and decrypt
          on request only, for example a vault level decrypt on login, and then entry level decryption only when the user specifically clicks on an entry;
          and for encryption an entry level encryption on creation of new entries and a vault level encryption and a filestystem write at lock and close 
          operations on the vault.
        `
      ],
      currentProgress:`This project is still in the works. So far I have made the internal cryptographic functions that will handle encryption, decryption,
      data key genration, and password based key derivation. Work has also commenced for handling reading vaults from the UI including a list of recently 
      used vaults.
      
      `
    },
    
    
    {
      projectName: "The Money game",
      projectURL: "the_money_game",
      projectOverview: `A simple game about earning the most possible money from financial investments such as real estate
      equities and intrest paying deposits.`,
      projectInspriation:`
        Long ago I played a game called Rat Race which had a similar premise of getting rich. The key distinction that I wanted to 
        show in my game was the use of more realistic values for financial tools like deposit interest rates and real estate which in Rat Race
        were picked in a way in which the player would earn money from very little money which is not always the case. More over, i wanted
        to implement new mechanics such as taxation at the end of every year (12 month period) and an enhanced securities exchange with many more
        companies to invest in.
      `,
      projectChallenges:[
        `the main challenge was that I didn't want to build a backend for this as that would incur more cost to me, so instead I wanted to make use of 
        localstorage and indexDB for storing all of the data on the client side`,
        `storing the data on the client side has an implication that the users are able to tamper with the data if it is not securely stored. That being said,
        it may also not make sense to encrypt data at every tick of the game as this would severly hinder the experience of the user.`,
        `a challenge also arises in the fact that I am not a finance major by any means, and therefore I don't know everything there is to know in finance so 
        some of the things that I put on there are what i found in my research when looking for certain real life financial mechanics`
      ],
      currentProgress:``,
      techUsed: ['nextjs','typescript','tailwind'],
    },
]