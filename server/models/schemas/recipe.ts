export class Recipe {
    private title: string;
    private instructions: string;
    private readyInMinutes: number;
    private image: string;
    private imageType: string;
    private sourceUrl: string;
    private servings: number;

    constructor(title: string, instructions: string, readyInMinutes: number, image: string, imageType: string, sourceUrl: string, servings: number) {
        this.title = title;
        this.instructions = instructions;
        this.readyInMinutes = readyInMinutes;
        this.image = image;
        this.imageType = imageType;
        this.sourceUrl = sourceUrl;
        this.servings = servings;
    }
}