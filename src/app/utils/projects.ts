export type ProjectDetails ={
  projectName: string,
  projectOverview: string,
  techUsed: Array<string>,
}

export const projects:Array<ProjectDetails> = [
    {
      projectName:"AES-GCM ",
      projectOverview: `A bare bones implementation of AES-GCM in Rust. For this project I used only the standard 
        library in rust.`,
      techUsed: ['rust'],
    },
    {
      projectName: "Password Manager",
      projectOverview: `A minimalist cross-platform desktop application built to serve my needs for a secure offline 
        password manager. Taking inspiration from KeePass I set out to create a password manager which would be simple to 
        use, with help along the way.`,
      techUsed: ['electron','typescript','tailwind'],
    },
    
    
    {
      projectName: "A project",
      projectOverview: `A minimalist cross-platform desktop application built to serve my needs for a secure offline 
        password manager. Taking inspiration from KeePass I set out to create a password manager which would be simple to 
        use, with help along the way. 
        
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.`,
      techUsed: ['electron','typescript','tailwind'],
    },
]