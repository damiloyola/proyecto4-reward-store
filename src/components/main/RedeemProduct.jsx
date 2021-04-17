import React, { useState } from "react";
import styled from "styled-components";
import { fetchRedeem } from "../../api/fetchRedeem";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

const Button = styled.button`
    border: none;
    padding: 8px;
    background-color: #fff;
    border-radius: 10px;
    width: 50%;
    cursor: pointer;
    margin-top: 10px;
    outline: none;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 10),
        outline: "none",
        border: "none",
    },
}));

function RedeemButton(props) {
    const { productCost, productId, user, setUser } = props;
    const cantAfford = productCost > user.points;
    const coinsNeed = productCost - user.points;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [redeemStatus, setRedeemStatus] = useState(false);

    const handleRedeem = (id, cost) => {
        const status = fetchRedeem(id);
        const newPoints = user.points - cost;
        setUser({ ...user, points: newPoints });
        setRedeemStatus(status);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Button
                disabled={cantAfford}
                onClick={() => {
                    handleRedeem(productId, productCost);
                    handleOpen();
                }}
            >
                {cantAfford
                    ? "you need " + coinsNeed + " more coins"
                    : "Redeem"}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                closeAfterTransition
                className={classes.modal}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {redeemStatus ? (
                            <div>
                                <h4>Success!</h4>
                                <p>Thank you for your purchase</p>
                            </div>
                        ) : (
                            <p>Error redeeming the product</p>
                        )}
                    </div>
                </Fade>
            </Modal>
        </Container>
    );
}

export default RedeemButton;
