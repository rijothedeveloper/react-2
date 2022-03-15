import { useState } from "react";
import { Form } from "reactstrap";

const AddFood = ({ onHandle }) => {
    const [formData, setFormData] = useState({'foodType': 'food'})
    const onFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const onSubmit =(event) => {
        event.preventDefault();
        onHandle(formData);
    }

    return (
        <Form>
            <select name="foodType" value={formData.foodType} onChange={onFormChange}>
                <option value="food">Food</option>
                <option value="drink">Drink</option>
            </select>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={onFormChange} />
            </label>
            <label>
                description:
                <input type="text" name="description" value={formData.description} onChange={onFormChange} />
            </label>
            <label>
                recipe:
                <input type="text" name="recipe" value={formData.recipe} onChange={onFormChange} />
            </label>
            <label>
                serve:
                <input type="text" name="serve" value={formData.serve} onChange={onFormChange} />
            </label>
            <input type="submit" onClick={onSubmit} />
        </Form>
    )
}

export default AddFood;