import { tokens } from "@/themes/theme";
import { Box, Button, TextField, useTheme } from "@mui/material";

export default function FormComponent({ values, touched, errors, isSubmitting, handleBlur, handleChange, handleSubmit }: any) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box className="body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" style={{ backgroundColor: theme.palette.mode == 'light' ? colors.whiteAccent[400] : colors.greyAccent[600] }}>
                    <div className="relative flex flex-wrap py-6 rounded shadow-md" style={{
                        backgroundColor: theme.palette.mode == 'light' ? colors.greyAccent[700] : colors.greyAccent[700],
                        color: theme.palette.mode == 'light' ? colors.blackAccent[200] : colors.yellowAccent[700]
                    }}
                    >
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold tracking-widest text-xs">LOCATION</h2>
                            <p className="mt-1">Hyderbad,Telangana,India</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold tracking-widest text-xs">EMAIL</h2>
                            <a className="leading-relaxed" href="mailto:example@email.com">
                                example@email.com
                            </a>
                            <h2 className="title-font font-semibold tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-xl" style={{
                    backgroundColor: theme.palette.mode == 'light' ? colors.whiteAccent[400] : colors.greyAccent[600],
                    color: theme.palette.mode == 'light' ? colors.blackAccent[200] : colors.yellowAccent[500]
                }}>
                    <h2 className="text-xl mb-1 font-medium title-font" style={{ color: theme.palette.mode == 'light' ? colors.orangeAccent[500] : colors.orangeAccent[500] }} >Feedback</h2>
                    <p className="leading-relaxed mb-5">
                        Feel free to send me a message and I will get back to you as soon as possible!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm">
                            Name
                        </label>
                        <TextField
                            type="text"
                            id="name"
                            name="name"
                            fullWidth
                            variant="outlined"
                            size="small"
                            onBlur={handleBlur}
                            value={values.name}
                            helperText={touched.name && errors.name}
                            error={!!touched.name && !!Boolean(errors.name)}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm">
                            Email
                        </label>
                        <TextField
                            type="email"
                            id="email"
                            name="email"
                            fullWidth
                            variant="outlined"
                            size="small"
                            onBlur={handleBlur}
                            value={values.email}
                            helperText={touched.email && errors.email}
                            error={!!touched.email && !!Boolean(errors.email)}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm ">
                            Message
                        </label>
                        <TextField
                            id="message"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth
                            variant="outlined"
                            size="small"
                            onBlur={handleBlur}
                            value={values.message}
                            helperText={touched.message && errors.message}
                            error={!!touched.message && !!Boolean(errors.message)}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={isSubmitting}
                            className="w-1/2"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                    {
                        isSubmitting
                            ?
                            <p className="text-xs italic mt-3">
                                Please leave your feedback!</p>
                            :
                            <p className="text-xs italic mt-3">
                                Thank you for your feedback!</p>
                    }
                </div>
            </div>
        </Box>
    )
}
