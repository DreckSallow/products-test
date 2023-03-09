## Usage:
1. Set the env variables:
    In `.env.example`, you can see the important data to run the application
    ```sh
      # This is the Url server endpoint to get the products data
      # You can set other different server, but it should work just
      REACT_APP_SERVER_URL=http://localhost:5000
    ```
2. Install Dependencies:
    ```sh
      # 1. Within root folder: {USER}/front-end-tech-test>
      # npm
      npm install
      # yarn 
      yarn

      # 2. Within front folder: {USER}/front-end-tech-test/front>
      # npm
      npm install
      # yarn 
      yarn
    ```

3. Run the app:

    Run simultaneously:
    ```sh
      # Within root folder: {USER}/front-end-tech-test>
      # npm
      npm run dev
      # yarn 
      yarn run dev
    ```

    Run separately:
    ```sh
      # Within root folder: {USER}/front-end-tech-test>
      # npm
      npm run start
      # yarn 
      yarn run start

      # Within front folder: {USER}/front-end-tech-test/front>
      # npm
      npm run start
      # yarn 
      yarn run start
    ```

4. And ready, go to: http://localhost:3000/

## Documentation:

### Env
- Add env variables config, to load `important data` from env.


### Scroll and Link
- Change Navbar component to `fixed`, to avoid scroll entire page
- Fix the link in `cart-component` because it throw an error. Missign "/"


### Product Detail Component
- Add `product-detail-component` with its css module and own store.
- Remove the Product detail state from `redux`, because it is redundant and not `"global state"`

### Fetch data
- Move the `fetch-products` to App component to sync data with `cart-component`

### Cart Component
- Add `cart-component` with its css module and own store.
- Move `QueryClientProvider` to index parent component, to use `useQuery` in App component
- Add `cart-icon` to sync with `add to cart` actions

### Product Component
- Add `product-component` with its styles and store
- Add news `basic classes` in `styles.css`
- Using `css modules`


### Basic Structure of pages
- Create the basic structure to pages.
- Add `react-query` dependency, to manage the queries.

### Routing and Css basic to themes
- Add routing using `react-router-dom`
- Add css variables to theme

### Scaffolding:

- Add `Typescript` to frontend folder, and remove the `js files`.
- Add dependencies as `react-router-dom`, `redux-toolkit`.
- Add `rome` to lint and format the files.
- Add the `BITACORA.md` to record important points.