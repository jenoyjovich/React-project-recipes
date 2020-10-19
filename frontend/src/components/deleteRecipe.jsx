import React from "react";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import { toast } from "react-toastify";
import recipeService from "../services/recipeService";

class DeleteRecipe extends Form {
  state = {};
  schema = {};
  handleCancel = () => {
    this.props.history.push("/my-recipes");
  };

  doSubmit = async () => {
    const recipeId = this.props.match.params.id;
    await recipeService.deleteRecipe(recipeId);
    toast("Recipe deleted");
    this.props.history.replace("/my-recipes");
  };
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Are you sure you want to delete this recipe?" />
        <div className="row">
          <div className="col-12 mt-4">
            <form
              method="POST"
              onSubmit={this.handleSubmit}
              noValidate
              autoComplete="off"
            >
              {this.renderButton("Delete recipe", "btn btn-danger")}
              <button
                onClick={this.handleCancel}
                className="btn btn-secondary ml-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteRecipe;
