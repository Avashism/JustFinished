using Microsoft.EntityFrameworkCore.Migrations;

namespace JustFinishedAPI.Migrations
{
    public partial class Invitations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Users_Projects");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users_Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Users_Invites",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users_Projects");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Users_Invites");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Users_Projects",
                nullable: false,
                defaultValue: 0);
        }
    }
}
