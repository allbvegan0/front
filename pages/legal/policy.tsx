import { Box, Grid, Link, VStack } from "@chakra-ui/react";
import React from "react";
import Description from "../../components/molecules/decorative/description";
import Title from "../../components/molecules/decorative/title";
import { baseURL } from "../blog";


const Policy = () => {
  return (
    <div>
      <p>
        This is an front site to sell and train users to how to use 
        <Link href={`https://${baseURL}/auth/login`}><span > ållßvegan.com</span></Link> for
        authentication.
      </p>
      <br/>
      <Title>
        Terms of Service
        </Title>
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
      <h2>Privacy Policy</h2>
      <p>
        This site uses JSON Web Tokens and an in-memory database which resets
        every ~2 hours.
      </p>
      <p>
        Data provided to this site is exclusively used to support signing in and
        is not passed to any third party services, other than via SMTP or OAuth
        for the purposes of authentication and deep learnning.
      </p>

    </div>
  );
};

export default Policy;

