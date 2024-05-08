import { fireEvent, render, screen } from "@testing-library/react";
import Square from "./Square";


describe('rendering of square component',()=>{
    it('should render square',()=>{
        const squareComponent=render(<Square />);
        expect(squareComponent).toBeDefined();
    })

    it('should render a empty square',()=>{
        render(<Square />);
        const squareCell=screen.getByRole('button');
        expect(squareCell.value).toBe("");
    })
})