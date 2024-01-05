import './Pollen.css'
import BlogPages from './BlogPages';
import dandilion from '../../Assets/dandilion.png'

const Pollen = ( ) => {
    return(
        <div>
            <BlogPages 
            title="Tips to Help Manage Your Pollen Allergies."
            picture={dandilion}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nulla facilisis metus sed ante consequat sollicitudin.
             Nam ac egestas magna, quis porta odio. Fusce lacinia enim eget efficitur bibendum. 
             Aenean fringilla, arcu nec viverra elementum, 
             dui orci ornare lacus, eu interdum sem sapien ut arcu. 
             Donec posuere consequat dolor. Duis lacinia pharetra mauris, nec aliquam elit convallis eget.
             Proin turpis tellus, cursus vel lacinia in, pulvinar ac tortor. Ut purus orci,
              volutpat ac vehicula et, euismod sit amet ipsum.

            Vestibulum commodo diam molestie, ultrices sapien at, placerat augue. Integer commodo magna sapien, et dictum tellus faucibus vitae.
             Suspendisse tincidunt, quam nec condimentum vulputate, risus metus luctus dui, rhoncus faucibus tortor mauris in velit. Aenean auctor sagittis nunc,
              a interdum magna molestie vel. Quisque euismod orci at arcu commodo blandit. Nunc viverra turpis libero. Curabitur lacinia turpis quis ultricies elementum."
             />
        </div>
    )
}

export default Pollen;