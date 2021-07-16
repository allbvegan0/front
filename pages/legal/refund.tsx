import { Box, Grid, Link, VStack } from "@chakra-ui/react";
import React from "react";
import Description from "../../components/molecules/decorative/description";
import Title from "../../components/molecules/decorative/title";

const Refund = () => {
  return (
    <div>
      <p>
        This is a helper platform <br/>
        <Link href={`https://allbvegan.com/auth/login`}><span >ållßvegan.com</span></Link> helper on refunds for
        sold items.
      </p>
      <br/>
      <Title>
        Terms of Refunds
        </Title>
      <p>
        THE PURCHASE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>

    </div>
  );
};

export default Refund;