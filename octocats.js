//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.


function Octocat(name, arms)
{
    this.name = name;
    this.arms = arms;

    this.slap = function
    {
        for (i = 0; i < this.arms; i++)
        {
            console.log("SLAP");
        }
    }
}









//Write your 3 new octocat objects below here.
new Octocat('larry', 4);
new Octocat('curly', 6);
new Octocat('moe', 8);
